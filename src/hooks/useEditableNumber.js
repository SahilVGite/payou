"use client";

import { useState } from "react";

// Backs a range slider with an editable text value: typing a valid in-range number updates
// the real value live (slider + any dependent calculation move with it), leaving the field
// alone otherwise so a mid-edit "" or partial number doesn't propagate NaN. Invalid input
// reverts to the last valid value (not the min) on blur, and the display re-formats (e.g.
// adds comma grouping) once the field loses focus, going back to a plain editable number
// while focused.
// Accepts what people actually type or paste — "50,00,000", "₹ 5,00,000", "12 %" — by
// dropping grouping commas, currency/percent signs and spaces before parsing. Anything that
// still isn't a plain number (or is empty) comes back as NaN.
function parseInput(raw) {
  const cleaned = String(raw).replace(/[,\s₹%]/g, "");
  return cleaned === "" ? NaN : Number(cleaned);
}

export function useEditableNumber(initialValue, { min, max, decimals = 0, format }) {
  const toText = (value) => (format ? format(value) : String(value));
  const [value, setValue] = useState(initialValue);
  const [text, setText] = useState(() => toText(initialValue));
  // Whole-number fields (amounts, tenure, FOIR) never take a fraction, even mid-typing —
  // otherwise "3.5" years would briefly calculate a 42-month EMI.
  const round = (num) => (decimals ? Number(num.toFixed(decimals)) : Math.round(num));

  function commit(raw) {
    const num = parseInput(raw);
    const base = Number.isFinite(num) ? num : value;
    const rounded = round(Math.min(max, Math.max(min, base)));
    setValue(rounded);
    setText(toText(rounded));
  }

  return {
    value,
    text,
    setFromSlider(raw) {
      setValue(raw);
      setText(toText(raw));
    },
    handleChange(raw) {
      setText(raw);
      const num = parseInput(raw);
      if (Number.isFinite(num) && num >= min && num <= max) {
        setValue(round(num));
      }
    },
    handleFocus() {
      setText(String(value));
    },
    handleBlur(event) {
      commit(event.target.value);
    },
  };
}
