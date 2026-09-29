export default function PageBanner({
  title,
  subtitle,
  image,
  imageAlt,
  className = "",
  children,
  onlyTxt = false,
  bottomRightImage = false,
}) {
  return (
    <section
      className={`relative bg-primary px-[4%] lg:px-[3%] ${onlyTxt ? "py-[clamp(0.9375rem,-0.2885rem+5.4487vw,6.25rem)]" : "py-[clamp(0.9375rem,-1.7308rem+11.859vw,12.5rem)]"} min-h-[40dvh] flex items-center text-white overflow-hidden ${className}`}
    >
      {image && !bottomRightImage && (
        <img
          className="absolute w-full h-full object-cover inset-0"
          src={image}
          alt={imageAlt ?? title ?? ""}
        />
      )}

      {image && bottomRightImage && (
        <img
          className="hidden md:block absolute w-[45%] [@media(min-width:1280px)]:w-[clamp(42.6875rem,-14.8125rem+71.875vw,71.4375rem)] h-full object-bottom-right object-contain bottom-[-6%] [@media(min-width:1280px)]:bottom-[-18%] right-0 z-10"
          src={image}
          alt={imageAlt ?? title ?? ""}
        />
      )}

      <div className="absolute w-full h-full inset-0 bg-[linear-gradient(270deg,#134b96b5_0%,#134b96b5_0%,#134B96b5_100%)] md:bg-[linear-gradient(270deg,rgba(19,75,150,0)_15.35%,rgba(19,75,150,0.94)_54.81%,#134B96_70.08%)] lg:bg-[linear-gradient(270deg,rgba(19,75,150,0)_41.35%,rgba(19,75,150,0.94)_54.81%,#134B96_73.08%)]" />

      <div className="relative z-30 max-w-[1920px] mx-auto w-full">
        {title && (
          <h1
            className={`text-[clamp(1.5rem,1.2794rem+0.9804vw,1.75rem)] md:text-[36px] lg:text-[clamp(2rem,0.4589rem+1.8051vw,2.625rem)] leading-[1.3] font-medium [&_span]:font-bold ${
              onlyTxt ? "text-center" : "max-w-[40ch] lg:max-w-[50ch]"
            }`}
          >
            {title}
          </h1>
        )}

        {subtitle && (
          <p
            className={`mt-3 text-[12px] md:text-[14px] lg:text-[clamp(0.875rem,0.5668rem+0.361vw,1rem)] font-medium text-white ${onlyTxt === true ? "text-center" : "max-w-[46ch] lg:max-w-[56ch]"}`}
          >
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
