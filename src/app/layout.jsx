import { Cairo, Inter, Nunito, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { getFooterContent } from "../lib/services/footer.service";
import PopupProvider from "../components/popup/PopupProvider";
import StickyWhatsapp from "../components/common/StickyWhatsapp";

const GTM_ID = "GTM-MZ8B6559";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-next",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito-next",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins-next",
});

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo-next",
});

export const metadata = {
  metadataBase: new URL("https://payyouadvisory.com"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "Pay You Advisory",
    template: "%s | Pay You Advisory",
  },
  description: "Clear financial guidance for the decisions that shape your next chapter.",
  openGraph: {
    title: "Pay You Advisory",
    description:
      "Clear financial guidance for the decisions that shape your next chapter.",
    siteName: "Pay You Advisory",
    type: "website",
    images: [
      {
        url: "/images/og_tag_logo.png",
        width: 107,
        height: 107,
        alt: "Pay You Advisory",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/images/favicon_io/favicon.ico", sizes: "any" },
      { url: "/images/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/favicon_io/apple-touch-icon.png",
  },
  manifest: "/images/favicon_io/site.webmanifest",
};

export default async function RootLayout({ children }) {
  const footer = await getFooterContent();
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${nunito.variable} ${poppins.variable} ${cairo.variable} h-full antialiased scroll-smooth`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden bg-white font-poppins text-[#10192b]">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <PopupProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer content={footer} />
          <StickyWhatsapp />
        </PopupProvider>
      </body>
    </html>
  );
}
