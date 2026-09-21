export default function Collapse({ open, children, className = "" }) {
  return (
    <div
      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${className}`}
      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}
