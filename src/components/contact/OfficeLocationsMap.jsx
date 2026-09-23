"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import "leaflet/dist/leaflet.css";

const BRANCH_ZOOM = 15;

// Teardrop pin built as inline SVG (not an image file) so there's no bundler-vs-Leaflet
// default-marker-icon path issue, and so it can use the site's own brand red.
const PIN_HTML = `
  <svg width="34" height="44" viewBox="0 0 34 44" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 0C7.6 0 0 7.6 0 17c0 12.75 17 27 17 27s17-14.25 17-27C34 7.6 26.4 0 17 0z" fill="#b11f24" />
    <circle cx="17" cy="17" r="7" fill="#ffffff" />
  </svg>
`;

function popupHtml(branch) {
    return `
    <div class="min-w-[210px] font-poppins">
      <p class="text-[13px] font-semibold text-primary leading-snug">${branch.name}</p>
      <p class="mt-1 text-[12px] text-[#4B5563] leading-snug">${branch.address}</p>
      ${branch.phone ? `<p class="mt-1.5 text-[12px] font-semibold text-primary">${branch.phone}</p>` : ""}
      <p class="mt-1 text-[11px] font-semibold text-ink">${branch.hours}</p>
      <a
        href="/contact-us/branch/${branch.slug}"
        class="mt-3 block rounded-full bg-[#b11f24] px-4 py-2 text-center text-[12px] font-semibold !text-white transition hover:bg-[#961a1e]"
      >GET ENQUIRY</a>
    </div>
  `;
}

// Wraps a plain Leaflet map (OpenStreetMap tiles, no API key needed) instead of the old
// Google embed — that was a static iframe with no JS control, so it couldn't pan to a
// branch or show a custom popup. Leaflet only touches `window`/`document`, so it's loaded
// dynamically inside an effect rather than imported at module scope, which would otherwise
// break the static export build (prerendering runs in Node, no DOM).
const OfficeLocationsMap = forwardRef(function OfficeLocationsMap({ branches }, ref) {
    const containerRef = useRef(null);
    const mapRef = useRef(null);
    const markersRef = useRef({});

    useImperativeHandle(ref, () => ({
        flyToBranch(slug) {
            const map = mapRef.current;
            const marker = markersRef.current[slug];
            if (!map || !marker) return;
            map.flyTo(marker.getLatLng(), BRANCH_ZOOM, { duration: 1.2 });
            marker.openPopup();
        },
    }));

    useEffect(() => {
        let cancelled = false;
        let resizeObserver;

        import("leaflet").then((leafletModule) => {
            if (cancelled || !containerRef.current || mapRef.current) return;
            const L = leafletModule.default;

            const map = L.map(containerRef.current, {
                zoomControl: false,
                attributionControl: true,
            });
            mapRef.current = map;

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution: "&copy; OpenStreetMap contributors",
            }).addTo(map);

            const icon = L.divIcon({
                html: PIN_HTML,
                className: "",
                iconSize: [34, 44],
                iconAnchor: [17, 44],
                popupAnchor: [0, -40],
            });

            branches.forEach((branch) => {
                const marker = L.marker([branch.lat, branch.lng], { icon })
                    .addTo(map)
                    .bindPopup(popupHtml(branch));
                markersRef.current[branch.slug] = marker;
            });

            const bounds = L.latLngBounds(branches.map((branch) => [branch.lat, branch.lng]));
            map.fitBounds(bounds, { padding: [40, 40] });

            // The container's size can settle a frame after mount (e.g. while surrounding
            // layout is still resolving); without this the tiles can render into a
            // stale/zero size and look cut off until the next manual interaction.
            resizeObserver = new ResizeObserver(() => map.invalidateSize());
            resizeObserver.observe(containerRef.current);
        });

        return () => {
            cancelled = true;
            resizeObserver?.disconnect();
            mapRef.current?.remove();
            mapRef.current = null;
            markersRef.current = {};
        };
    }, [branches]);

    return <div ref={containerRef} className="h-full w-full" />;
});

export default OfficeLocationsMap;
