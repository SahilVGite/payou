import { ChevronDown } from "lucide-react";

export default function Select({ className = "", wrapperClassName = "", chevronClassName = "text-[#5f6a7b]", ...props }) {
  return (
    <span className={`relative block ${wrapperClassName}`}>
      <select className={`appearance-none ${className}`} {...props} />
      <ChevronDown
        size={16}
        className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 ${chevronClassName}`}
      />
    </span>
  );
}
