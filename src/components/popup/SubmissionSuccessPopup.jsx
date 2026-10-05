"use client";

import { useEffect, useId, useRef } from "react";
import { CircleCheck } from "lucide-react";
import PopupShell from "./PopupShell";

// Acknowledgement shown after every successful form / lead submission. Opened with
//   openPopup(POPUPS.SUBMISSION_SUCCESS, { title, message })
// Both props are optional; the defaults suit a generic lead.
export default function SubmissionSuccessPopup({
    onClose,
    title = "Thank You!",
    message = "Your request has been submitted successfully. Our team will get in touch with you shortly.",
}) {
    const titleId = useId();
    const okRef = useRef(null);

    useEffect(() => {
        okRef.current?.focus({ preventScroll: true });
    }, []);

    return (
        <PopupShell
            onClose={onClose}
            labelledBy={titleId}
            className="max-w-110 bg-primary/50 px-5 py-8 md:px-8 md:py-10"
        >
            <div role="status" className="flex flex-col items-center text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-white/15 text-white shadow-[inset_0_1px_12px_rgba(255,255,255,0.35)]">
                    <CircleCheck size={36} strokeWidth={1.75} />
                </span>
                <h2
                    id={titleId}
                    className="m-0 mt-5 text-[20px] md:text-[22px] lg:text-[clamp(1.25rem,0.6336rem+0.722vw,1.5rem)] font-semibold text-white"
                >
                    {title}
                </h2>
                <p className="m-0 mt-2 text-[14px] md:text-[15px] lg:text-[clamp(0.875rem,0.7209rem+0.1805vw,0.9375rem)] font-normal leading-relaxed text-white/90">
                    {message}
                </p>
                <button
                    ref={okRef}
                    type="button"
                    onClick={onClose}
                    className="mt-6 w-full max-w-60 rounded-full border-0 bg-[#b11f24] py-[0.9em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold uppercase text-white shadow-[0_5px_10px_rgba(177,31,36,0.25)] transition hover:bg-[#961a1e] hover:shadow-[0_8px_16px_rgba(177,31,36,0.32)] cursor-pointer"
                >
                    Okay
                </button>
            </div>
        </PopupShell>
    );
}
