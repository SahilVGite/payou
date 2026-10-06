"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Send, X } from "lucide-react";

const SLIDE_DURATION = 5000; // ms per slide
const TICK = 50;

// Full-screen, Instagram/WhatsApp-style story player (reference: IDFC FIRST Bank web stories).
//  - The current slide's photo fills the viewport behind the player, heavily blurred, so the
//    backdrop takes on the story's colours.
//  - Segmented progress bars across the top; each slide auto-advances after 5s and the player
//    moves on to the next story after the last slide (closing after the final story).
//  - Tap the left third to go back, anywhere else to go forward; press and hold to pause.
//    ← / → keys navigate, Esc closes. Arrow buttons sit outside the frame on larger screens.
export default function StoryViewer({ stories, startIndex, onClose }) {
    const [storyIndex, setStoryIndex] = useState(startIndex);
    const [slideIndex, setSlideIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [paused, setPaused] = useState(false);
    const [copied, setCopied] = useState(false);
    const pressStart = useRef(0);
    const progressRef = useRef(0);
    const nextRef = useRef(null);

    const story = stories[storyIndex];
    const slide = story.slides[slideIndex];
    const isFirst = storyIndex === 0 && slideIndex === 0;

    const goTo = useCallback((nextStory, nextSlide) => {
        setStoryIndex(nextStory);
        setSlideIndex(nextSlide);
        progressRef.current = 0;
        setProgress(0);
    }, []);

    const next = useCallback(() => {
        if (slideIndex < story.slides.length - 1) goTo(storyIndex, slideIndex + 1);
        else if (storyIndex < stories.length - 1) goTo(storyIndex + 1, 0);
        else onClose();
    }, [goTo, onClose, slideIndex, stories.length, story.slides.length, storyIndex]);

    const prev = useCallback(() => {
        if (slideIndex > 0) goTo(storyIndex, slideIndex - 1);
        else if (storyIndex > 0) goTo(storyIndex - 1, stories[storyIndex - 1].slides.length - 1);
        else goTo(0, 0);
    }, [goTo, slideIndex, stories, storyIndex]);

    useEffect(() => {
        nextRef.current = next;
    });

    // Auto-advance timer: fills the current bar, then moves on once it's full.
    useEffect(() => {
        if (paused) return undefined;
        const timer = setInterval(() => {
            progressRef.current = Math.min(1, progressRef.current + TICK / SLIDE_DURATION);
            setProgress(progressRef.current);
            if (progressRef.current >= 1) nextRef.current?.();
        }, TICK);
        return () => clearInterval(timer);
    }, [paused, storyIndex, slideIndex]);

    // Keyboard controls.
    useEffect(() => {
        const onKey = (event) => {
            if (event.key === "Escape") onClose();
            else if (event.key === "ArrowRight") next();
            else if (event.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [next, prev, onClose]);

    // Lock page scroll while open (same flag PopupProvider uses for other window handlers).
    useEffect(() => {
        const { body, documentElement } = document;
        const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
        const previousOverflow = body.style.overflow;
        const previousPadding = body.style.paddingRight;
        body.style.overflow = "hidden";
        if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
        documentElement.dataset.popupOpen = "true";
        return () => {
            body.style.overflow = previousOverflow;
            body.style.paddingRight = previousPadding;
            delete documentElement.dataset.popupOpen;
        };
    }, []);

    const share = async () => {
        const data = { title: story.title, url: window.location.href };
        try {
            if (navigator.share) {
                await navigator.share(data);
            } else {
                await navigator.clipboard.writeText(data.url);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch {
            // Share sheet dismissed — nothing to do.
        }
    };

    // Press-and-hold pauses; a quick tap navigates (left third = back).
    const onPointerDown = () => {
        pressStart.current = Date.now();
        setPaused(true);
    };
    const onPointerUp = (event) => {
        setPaused(false);
        if (Date.now() - pressStart.current > 300) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX - rect.left < rect.width / 3) prev();
        else next();
    };

    return createPortal(
        <div
            role="dialog"
            aria-modal="true"
            aria-label={story.title}
            className="fixed inset-0 z-[1000000000] flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Blurred copy of the current slide as the backdrop */}
            <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-80 blur-3xl"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-black/35" onClick={onClose} />

            <button
                type="button"
                onClick={onClose}
                aria-label="Close stories"
                className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25 cursor-pointer"
            >
                <X size={22} />
            </button>

            <div className="relative z-10 flex items-center gap-6">
                <button
                    type="button"
                    onClick={prev}
                    disabled={isFirst}
                    aria-label="Previous"
                    className="hidden size-12 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-lg transition hover:scale-105 disabled:cursor-default disabled:bg-white/20 disabled:text-white/50 md:flex cursor-pointer"
                >
                    <ChevronLeft size={24} />
                </button>

                <div
                    className="relative h-dvh w-screen select-none overflow-hidden bg-black md:h-[min(47.2rem,88dvh)] md:w-auto md:aspect-[452/755] md:rounded-2xl md:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                    onPointerDown={onPointerDown}
                    onPointerUp={onPointerUp}
                    onPointerLeave={() => setPaused(false)}
                    onContextMenu={(event) => event.preventDefault()}
                >
                    <img
                        key={`${story.id}-${slideIndex}`}
                        src={slide.image}
                        alt={slide.title}
                        draggable={false}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0)_22%,rgba(0,0,0,0)_45%,rgba(0,0,0,0.85)_100%)]" />

                    {/* Progress bars */}
                    <div className="absolute inset-x-3.5 top-3 flex gap-1">
                        {story.slides.map((item, index) => (
                            <span key={index} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/35">
                                <span
                                    className="block h-full rounded-full bg-white"
                                    style={{
                                        width: `${index < slideIndex ? 100 : index === slideIndex ? progress * 100 : 0}%`,
                                    }}
                                />
                            </span>
                        ))}
                    </div>

                    {/* Header */}
                    <div className="absolute inset-x-3.5 top-7 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <span className="flex size-10 items-center justify-center overflow-hidden rounded-full bg-white">
                                <img src="/images/siteLogoHeader.png" alt="" className="w-[85%] object-contain" />
                            </span>
                            <div className="leading-tight text-white">
                                <p className="text-[15px] font-medium">PayYou Advisory</p>
                                <p className="text-[12px] text-white/75">{story.category}</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            onPointerDown={(event) => event.stopPropagation()}
                            onPointerUp={(event) => event.stopPropagation()}
                            onClick={share}
                            aria-label="Share story"
                            className="relative flex size-9 items-center justify-center rounded-full text-white transition hover:bg-white/15 cursor-pointer"
                        >
                            <Send size={20} />
                            {copied ? (
                                <span className="absolute right-0 top-full mt-1 whitespace-nowrap rounded bg-black/70 px-2 py-1 text-[11px]">
                                    Link copied
                                </span>
                            ) : null}
                        </button>
                    </div>

                    {/* Slide copy */}
                    <div className="absolute inset-x-5 bottom-8 text-white">
                        <h3 className="text-[22px] md:text-[24px] font-bold leading-tight">{slide.title}</h3>
                        {slide.text ? <p className="mt-2 text-[14px] md:text-[15px] leading-relaxed text-white/90">{slide.text}</p> : null}
                    </div>

                    {paused ? <span className="sr-only">Paused</span> : null}
                </div>

                <button
                    type="button"
                    onClick={next}
                    aria-label="Next"
                    className="hidden size-12 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-lg transition hover:scale-105 md:flex cursor-pointer"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>,
        document.body,
    );
}
