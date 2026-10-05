"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import PopupShell from "./PopupShell";
import SubmissionSuccessPopup from "./SubmissionSuccessPopup";
import { submitCallback } from "../../lib/services/callback.service";
import { trackEvent } from "../../lib/analytics";

// "Enter your contact number" popup. Only collects the mobile number — what happens with it
// is up to the caller, via `onSubmit(phone)` (a 10-digit string, no +91). If `onSubmit`
// throws, its message is shown inside the popup; if it resolves, a thank-you message
// replaces the form. The mobile field is the same one used in the home banner's
// EligibilityForm (fixed "+91" prefix, digits only, max 10).
export default function ContactNumberPopup({
    onClose,
    onSubmit,
    source,
    message = "Enter your contact number to know more. Our team will get in touch with you shortly.",
}) {
    const titleId = useId();
    const inputRef = useRef(null);
    const [mobile, setMobile] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        inputRef.current?.focus({ preventScroll: true });
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        if (submitting) return;
        if (!/^\d{10}$/.test(mobile)) {
            setError("Please enter a valid 10-digit mobile number.");
            return;
        }
        setSubmitting(true);
        setError("");
        try {
            const leadSource = {
                page: source?.page || "Website",
                section: source?.section || "Popup",
                button: source?.button || "Submit",
            };
            if (onSubmit) {
                await onSubmit(mobile);
            } else {
                const data = await submitCallback({
                    phone: mobile,
                    phoneCode: "+91",
                    page: leadSource.page,
                    section: leadSource.section,
                    button: leadSource.button,
                });
                if (!data?.success) {
                    throw new Error(data?.message || "Unable to submit your number. Please try again.");
                }
            }
            trackEvent("generate_lead", leadSource);
            setSubmitted(true);
        } catch (submitError) {
            setError(submitError?.message || "Unable to submit your number. Please try again.");
        } finally {
            setSubmitting(false);
        }
    }

    // Swaps straight to the shared confirmation popup (rendered here rather than reopened via
    // openPopup, which would mean importing PopupProvider — and that already imports this file).
    if (submitted) {
        return (
            <SubmissionSuccessPopup
                onClose={onClose}
                message="Your contact number has been received. Our team will get in touch with you shortly."
            />
        );
    }

    return (
        <PopupShell
            onClose={onClose}
            labelledBy={titleId}
            className="max-w-135 bg-primary/50 px-5 py-7 md:px-8 md:py-9"
        >
            <form className="flex flex-col gap-5 md:gap-6" onSubmit={handleSubmit} noValidate>
                <p
                    id={titleId}
                    className="m-0 pr-8 text-[14px] md:text-[15px] lg:text-[clamp(0.875rem,0.7209rem+0.1805vw,0.9375rem)] font-normal leading-relaxed text-white"
                >
                    {message}
                </p>
                <div>
                    <div className="relative">
                        <input
                            ref={inputRef}
                            className="block w-full rounded-full border-0 bg-white/95 px-4.5 pl-12 py-3.25 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] text-ink placeholder:text-[#4B5563] focus:ring-0 focus:outline-none"
                            name="mobile"
                            inputMode="numeric"
                            autoComplete="tel-national"
                            aria-label="Mobile number"
                            aria-invalid={error ? "true" : undefined}
                            maxLength={10}
                            value={mobile}
                            placeholder="Enter Mobile Number"
                            onChange={(event) => {
                                setMobile(event.target.value.replace(/\D/g, "").slice(0, 10));
                                setError("");
                            }}
                        />
                        <span className="absolute top-1/2 -translate-y-1/2 left-4.5 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] text-ink">
                            +91
                        </span>
                    </div>
                    {error ? (
                        <p role="alert" className="m-0 mt-2 pl-4.5 text-[12px] md:text-[13px] font-medium text-[#ffb4b6]">
                            {error}
                        </p>
                    ) : null}
                </div>
                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full border-0 bg-[#b11f24] py-[0.9em] text-[12px] md:text-[14px] lg:text-[clamp(0.8125rem,0.5043rem+0.361vw,0.9375rem)] font-semibold uppercase text-white shadow-[0_5px_10px_rgba(177,31,36,0.25)] transition hover:bg-[#961a1e] hover:shadow-[0_8px_16px_rgba(177,31,36,0.32)] disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
                >
                    {submitting ? "Submitting..." : "Submit"}
                </button>
                <p className="m-0 -mt-1 md:-mt-2 text-center text-[11px] md:text-[12px] lg:text-[clamp(0.75rem,0.5959rem+0.1805vw,0.8125rem)] text-white/85">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy-policy" target="_blank" className="underline text-white">
                        Privacy Policy
                    </Link>
                    .
                </p>
            </form>
        </PopupShell>
    );
}
