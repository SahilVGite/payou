import { Cairo, Inter, Nunito, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

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
  title: {
    default: "Pay You Advisory",
    template: "%s | Pay You Advisory",
  },
  description: "Clear financial guidance for the decisions that shape your next chapter.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable} ${poppins.variable} ${cairo.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col overflow-x-hidden bg-white font-poppins text-[#10192b]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
