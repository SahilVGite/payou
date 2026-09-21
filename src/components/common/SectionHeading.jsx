export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-[#e56b4e]">{eyebrow}</p> : null}
      <h2 className="mt-3 font-poppins text-3xl font-semibold leading-tight tracking-tight text-[#12372a] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 font-inter text-base leading-7 text-[#52685d]">{description}</p> : null}
    </div>
  );
}