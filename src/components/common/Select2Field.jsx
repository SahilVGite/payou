"use client";

import { Children, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import "select2/dist/css/select2.css";
import "./select2-theme.css";

// What the native <select> would show for `matchValue` (or, uncontrolled, whatever it
// would default to on its own — the explicitly `selected` option, else the first one) —
// read straight from the `<option>` children rather than the DOM, so it's known
// synchronously on the very first render, before Select2 has even started loading.
function getOptionLabel(children, matchValue) {
  const options = Children.toArray(children);
  if (matchValue !== undefined) {
    const matched = options.find((option) => option.props.value === matchValue);
    if (matched) return matched.props.children;
  }
  const explicitlySelected = options.find((option) => option.props.selected);
  return (explicitlySelected ?? options[0])?.props?.children ?? "";
}

// Drop-in replacement for ../common/Select (same `<option>`-children API, same
// value/onChange shape) that renders its open options panel through jQuery + Select2
// instead of the browser's native <select> list, so it can be reskinned to match this
// site's own custom Dropdown component (see Dropdown.jsx and select2-theme.css) —
// something a native select's dropdown can't be restyled to do.
//
// Select2 manages its own DOM (usually appended to <body>) outside React's tree, so it's
// initialized/destroyed entirely inside an effect, and jQuery + select2 are dynamically
// imported so neither ever loads during the static export build (server has no DOM).
// The real <select> stays mounted (Select2 only visually hides it — see select2's own
// .select2-hidden-accessible rule, which clips rather than `display:none`s it, so native
// `required` validation on it, like the Contact form's Select Service field, keeps working).
// Because Select2 sets that hidden select's value itself, its own 'change' event — not a
// normal input event React would otherwise catch — is what's wired to `onChange` here.
export default function Select2Field({
  value,
  onChange,
  className = "",
  // Accepted only for drop-in compatibility with ../common/Select's props — Select2 always
  // renders its own trigger/dropdown markup (styled via select2-theme.css), so neither one
  // has anything left to apply to; both are intentionally discarded rather than spread onto
  // the underlying <select>, where they'd otherwise leak through as invalid DOM attributes.
  wrapperClassName: _wrapperClassName,
  chevronClassName: _chevronClassName,
  children,
  ...props
}) {
  const selectRef = useRef(null);
  const instanceRef = useRef(null);
  const onChangeRef = useRef(onChange);
  // Select2's own JS is loaded async (dynamically imported below), so there's an
  // unavoidable gap after mount where it isn't ready yet. Left alone, that gap showed the
  // plain native <select> — a visibly different "old" dropdown — until Select2 swapped it
  // out, and under fast-refresh/react-strict-mode remount timing could briefly show both
  // overlapping. Hiding the real select and standing in a static look-alike (same classes,
  // same text, a matching chevron) until `isReady` means the very first frame already looks
  // like the final Select2 widget, so there's nothing to visibly swap.
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    let cancelled = false;

    // The default "select2" entry point is the core build, which resolves options like
    // containerCssClass/dropdownCssClass through internal "select2/compat/..." submodules
    // that only exist inside Select2's own concatenated AMD bundle — not as real files a
    // bundler can resolve on their own. The "full" build bundles those in, avoiding that.
    Promise.all([import("jquery"), import("select2/dist/js/select2.full.js")]).then(([jqueryModule, select2Module]) => {
      if (cancelled || !selectRef.current) return;
      const $ = jqueryModule.default ?? jqueryModule;
      if (typeof window !== "undefined") {
        window.jQuery = window.$ = $;
      }
      const select2Factory = select2Module.default ?? select2Module;
      if (typeof select2Factory === "function") select2Factory(window, $);

      const $select = $(selectRef.current);
      if ($select.data("select2")) {
        $select.select2("destroy");
      }
      // A leading `<option value="">` (e.g. the Contact form's "Select a service") is
      // recognized as a placeholder automatically — without telling Select2 about it via
      // the `placeholder` option, it just renders that option's text in the normal
      // (non-placeholder) color, since Select2 never enters its actual placeholder state.
      const firstOption = selectRef.current.options[0];
      const placeholderText = firstOption && firstOption.value === "" ? firstOption.text : undefined;
      // Deliberately not using the containerCssClass/dropdownCssClass options here: they
      // route through Select2's internal "compat/containerCss" and "compat/dropdownCss"
      // submodules, resolved via a runtime `require(amdBase + 'compat/...')` call inside
      // Select2's own bundled file — a pattern this bundler doesn't resolve correctly, so
      // the classes silently never get added. Every Select2 on this site looks the same
      // regardless, so select2-theme.css targets Select2's own default global classes
      // directly instead of needing per-instance marker classes at all.
      $select.select2({
        width: "100%",
        minimumResultsForSearch: Infinity,
        ...(placeholderText ? { placeholder: placeholderText } : {}),
      });
      instanceRef.current = $select;
      $select.on("change", () => {
        onChangeRef.current?.({ target: { value: $select.val() } });
      });
      setIsReady(true);
    });

    return () => {
      cancelled = true;
      setIsReady(false);
      if (instanceRef.current) {
        instanceRef.current.off("change");
        instanceRef.current.select2("destroy");
        instanceRef.current = null;
      }
    };
  }, []);

  // Keep Select2 in sync with externally-driven value changes (e.g. this session's "Start
  // Over" reset) — skipped entirely for uncontrolled usage (no `value` prop passed at all).
  useEffect(() => {
    if (value === undefined || !instanceRef.current) return;
    if (instanceRef.current.val() !== value) {
      instanceRef.current.val(value).trigger("change");
    }
  }, [value]);

  return (
    // Select2 inserts its generated markup as a sibling of the <select>, outside React's
    // knowledge — containing that inside a wrapper React fully owns (rather than letting it
    // land as a raw sibling within whatever the caller's own JSX structure is) keeps that
    // foreign DOM node from ever confusing React's reconciliation of the caller's own tree.
    <span className="relative block w-full">
      {/* The select's own className prop must never change across renders: once Select2
          takes over, it adds its own "select2-hidden-accessible" class to this element
          imperatively (outside React). If the className prop value changed here (e.g. to
          toggle a loading-state "invisible" class), React would reassign the DOM node's
          whole className string on that re-render and silently wipe Select2's class along
          with it — un-hiding the native select right next to Select2's own widget, which
          is exactly the "two select fields" bug this caused. The loading-state visibility
          toggle instead lives on this wrapper span, which React fully owns and Select2
          never touches. */}
      <span className={isReady ? undefined : "invisible"}>
        <select ref={selectRef} className={className} defaultValue={value} {...props}>
          {children}
        </select>
      </span>
      {!isReady ? (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 flex items-center ${className}`}
        >
          <span className="flex-1 truncate">{getOptionLabel(children, value)}</span>
          <ChevronDown size={16} className="absolute right-4 top-1/2 shrink-0 -translate-y-1/2 text-[#5f6a7b]" />
        </span>
      ) : null}
    </span>
  );
}
