"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import ContactNumberPopup from "./ContactNumberPopup";
import SubmissionSuccessPopup from "./SubmissionSuccessPopup";

// Every popup the site can open, by name. Add a new popup by creating its component in this
// folder and registering it here — callers then open it with `openPopup(POPUPS.<NAME>)`.
export const POPUPS = {
    CONTACT_NUMBER: "contactNumber",
    SUBMISSION_SUCCESS: "submissionSuccess",
};

const registry = {
    [POPUPS.CONTACT_NUMBER]: ContactNumberPopup,
    [POPUPS.SUBMISSION_SUCCESS]: SubmissionSuccessPopup,
};

const PopupContext = createContext(null);

// Opens/closes the site-wide popups from anywhere under the root layout:
//   const { openPopup, closePopup } = usePopup();
//   openPopup(POPUPS.CONTACT_NUMBER, { onSubmit: async (phone) => { ... } });
// The second argument is passed straight through to the popup component as props.
export function usePopup() {
    const context = useContext(PopupContext);
    if (!context) throw new Error("usePopup must be used inside <PopupProvider>");
    return context;
}

// Locks page scroll while a popup is open. Padding the body by the scrollbar's width keeps
// the page from shifting sideways when the scrollbar disappears. The `data-popup-open` flag
// on <html> lets other window-level scroll handlers (e.g. HeroSection's scroll-to-stats
// jump) know to stand down while a popup is showing.
function useScrollLock(locked) {
    useEffect(() => {
        if (!locked) return undefined;
        const { body, documentElement } = document;
        const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
        const previousOverflow = body.style.overflow;
        const previousPaddingRight = body.style.paddingRight;
        body.style.overflow = "hidden";
        if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
        documentElement.dataset.popupOpen = "true";
        return () => {
            body.style.overflow = previousOverflow;
            body.style.paddingRight = previousPaddingRight;
            delete documentElement.dataset.popupOpen;
        };
    }, [locked]);
}

export default function PopupProvider({ children }) {
    // Always null during the static export build (popups only open from a browser-side
    // `openPopup` call), so the portal below never touches `document` on the server.
    const [popup, setPopup] = useState(null);

    const openPopup = useCallback((name, props = {}) => {
        if (!registry[name]) {
            console.warn(`Unknown popup "${name}"`);
            return;
        }
        setPopup({ name, props });
    }, []);
    const closePopup = useCallback(() => setPopup(null), []);

    useScrollLock(Boolean(popup));

    const value = useMemo(() => ({ openPopup, closePopup }), [openPopup, closePopup]);
    const ActivePopup = popup ? registry[popup.name] : null;

    return (
        <PopupContext.Provider value={value}>
            {children}
            {ActivePopup
                ? createPortal(<ActivePopup {...popup.props} onClose={closePopup} />, document.body)
                : null}
        </PopupContext.Provider>
    );
}
