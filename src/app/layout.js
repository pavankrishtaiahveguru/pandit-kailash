import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/common/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://your-domain.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Pandit Kailash | Astrology & Psychic Readings UK",
    template: "%s | Pandit Kailash",
  },

  description:
    "Explore personalised Vedic astrology, psychic readings, palmistry, horoscope and birth chart guidance with Pandit Kailash. Enquire about private consultations across London, Manchester, Birmingham and the UK.",

  keywords: [
    "Pandit Kailash",
    "Vedic astrology UK",
    "psychic readings UK",
    "astrologer in London",
    "astrologer in Manchester",
    "astrologer in Birmingham",
    "love and relationship astrology",
    "palm reading",
    "horoscope and birth chart reading",
    "marriage compatibility astrology",
    "career astrology",
    "online astrology consultation",
  ],

  authors: [{ name: "Pandit Kailash" }],
  creator: "Pandit Kailash",
  publisher: "Pandit Kailash",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Pandit Kailash",
    title: "Pandit Kailash | Astrology & Psychic Readings UK",
    description:
      "Personalised astrology, psychic readings and spiritual guidance. Explore consultation options for relationships, career, palmistry and Vedic astrology.",
    images: [
      {
        url: "/logo/logo.png",
        width: 512,
        height: 512,
        alt: "Pandit Kailash — Astrology & Psychic Readings",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pandit Kailash | Astrology & Psychic Readings UK",
    description:
      "Explore personalised astrology, psychic readings and spiritual guidance with Pandit Kailash.",
    images: ["/logo/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101C32",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
