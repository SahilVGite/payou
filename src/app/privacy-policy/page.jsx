import PageHero from "../../components/common/PageHero";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Your privacy" title="A clear promise about your information." description="We keep your personal information secure, use it responsibly, and only collect what helps us provide a better experience." />
      <article className="mx-auto max-w-4xl space-y-10 px-6 py-20 font-inter text-base leading-8 text-[#52685d] lg:px-10 lg:py-28">
        <section><h2 className="font-poppins text-2xl font-semibold text-[#12372a]">Information we collect</h2><p className="mt-3">We may collect information you share with us when you contact Pay You, request a consultation, or use our website. This can include your name, contact details, and information relevant to your enquiry.</p></section>
        <section><h2 className="font-poppins text-2xl font-semibold text-[#12372a]">How we use it</h2><p className="mt-3">We use your information to respond to you, provide requested services, improve our website, and meet our legal and regulatory obligations. We do not sell your personal information.</p></section>
        <section><h2 className="font-poppins text-2xl font-semibold text-[#12372a]">Your choices</h2><p className="mt-3">You can ask us what information we hold about you, request a correction, or ask us to stop contacting you. Write to <a className="font-semibold text-[#e56b4e]" href="mailto:privacy@payyou.co">privacy@payyou.co</a> with your request.</p></section>
        <section><h2 className="font-poppins text-2xl font-semibold text-[#12372a]">Questions</h2><p className="mt-3">This policy was last updated on 17 September 2026. If you have a question about our approach, we are happy to explain it in plain language.</p></section>
      </article>
    </>
  );
}