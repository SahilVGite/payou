"use client";

import { useState } from "react";

// Backs a range slider with an editable text value: typing a valid in-range number updates
// the real value live (slider + any dependent calculation move with it), leaving the field
// alone otherwise so a mid-edit "" or partial number doesn't propagate NaN. Invalid input
// reverts to the last valid value (not the min) on blur, and the display re-formats (e.g.
// adds comma grouping) once the field loses focus, going back to a plain editable number
// while focused.
export function useEditableNumber(initialValue, { min, max, decimals = 0, format }) {
  const toText = (value) => (format ? format(value) : String(value));
  const [value, setValue] = useState(initialValue);
  const [text, setText] = useState(() => toText(initialValue));

  function commit(raw) {
    const num = Number(raw);
    const base = raw !== "" && Number.isFinite(num) ? num : value;
    const clamped = Math.min(max, Math.max(min, base));
    const rounded = decimals ? Number(clamped.toFixed(decimals)) : Math.round(clamped);
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
      const num = Number(raw);
      if (raw !== "" && Number.isFinite(num) && num >= min && num <= max) {
        setValue(num);
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
