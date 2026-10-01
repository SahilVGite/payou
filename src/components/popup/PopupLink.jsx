"use client";

import Link from "next/link";
import { POPUPS, usePopup } from "./PopupProvider";

// Drop-in stand-in for next/link's <Link> on the CTAs that should open a popup instead of
// navigating. It keeps the same props (href, className, children...) and still renders a
// real link, so the href stays the no-JS / open-in-new-tab fallback. To make any one CTA go
// back to navigating normally, rename its <PopupLink> back to <Link> — nothing else changes.
// `popup`/`popupProps` pick which popup opens (see POPUPS in PopupProvider) and its props.
export default function PopupLink({ popup = POPUPS.CONTACT_NUMBER, popupProps, source, onClick, ...props }) {
    const { openPopup } = usePopup();

    return (
        <Link
            {...props}
            onClick={(event) => {
                onClick?.(event);
                // Let ctrl/cmd/shift/middle-click still open the href in a new tab/window.
                if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
                    return;
                }
                event.preventDefault();
                openPopup(popup, { ...popupProps, source });
            }}
        />
    );
}
