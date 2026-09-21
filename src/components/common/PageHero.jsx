export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-[#dfe5dd] bg-[#eaf0e8]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-[#e56b4e]">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-poppins text-4xl font-semibold leading-tight tracking-tight text-[#12372a] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? <p className="mt-6 max-w-2xl font-inter text-lg leading-8 text-[#52685d]">{description}</p> : null}
      </div>
    </section>
  );
}