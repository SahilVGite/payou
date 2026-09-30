"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

// Shared frame for every popup: dimmed + blurred backdrop, a card centered on screen, and a
// close button in the card's top-right corner. Closes on the close button, a click on the
// backdrop, or Escape. Wheel/touch scrolling on the backdrop is swallowed so it can't chain
// through to the page (the page itself is already locked by PopupProvider).
export default function PopupShell({ onClose, labelledBy, className = "", children }) {
    const overlayRef = useRef(null);
    const [visible, setVisible] = useState(false);

    // Starts hidden and flips to visible on the next frame so the fade/scale-in transition
    // actually plays on mount.
    useEffect(() => {
        const frame = requestAnimationFrame(() => setVisible(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "Escape") onClose();
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    // Registered natively (not via React's onWheel) because React attaches wheel/touch
    // listeners as passive, where preventDefault is ignored.
    useEffect(() => {
        const overlay = overlayRef.current;
        if (!overlay) return undefined;
        const block = (event) => event.preventDefault();
        overlay.addEventListener("wheel", block, { passive: false });
        overlay.addEventListener("touchmove", block, { passive: false });
        return () => {
            overlay.removeEventListener("wheel", block);
            overlay.removeEventListener("touchmove", block);
        };
    }, []);

    return (
        <div
            ref={overlayRef}
            className={`fixed inset-0 z-999999999 flex items-center justify-center bg-black/54 px-4 backdrop-blur-xs transition-opacity duration-300 ${
                visible ? "opacity-100" : "opacity-0"
            }`}
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={labelledBy}
                className={`bg-glass-effect relative w-full rounded-3xl shadow-[0_24px_60px_rgba(8,24,56,0.45)] backdrop-blur-xs transition duration-300 ${
                    visible ? "translate-y-0 scale-100" : "translate-y-3 scale-95"
                } ${className}`}
                 
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition hover:rotate-90 hover:bg-white/25 cursor-pointer"
                >
                    <X size={18} />
                </button>
                {children}
            </div>
        </div>
    );
}
