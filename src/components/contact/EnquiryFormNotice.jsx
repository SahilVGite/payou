export default function EnquiryFormNotice({ message }) {
  if (!message) return null;

  if (message.type !== "success") {
    return (
      <p className="mt-[1em] text-center text-[12px] md:text-[14px] text-[#ffd0d0]" role="alert">
        {message.text}
      </p>
    );
  }

  return (
    <div
      role="status"
      className="mt-[1em] flex items-center gap-3 rounded-2xl border border-[#b7ebc6] bg-white px-4 py-3 shadow-[0px_10px_24px_rgba(0,0,0,0.18)]"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#16803c] text-[16px] font-bold leading-none text-white"
        aria-hidden="true"
      >
        ✓
      </span>
      <span className="text-left text-[13px] font-semibold leading-snug text-[#14532d] md:text-[15px]">
        {message.text}
      </span>
    </div>
  );
}
