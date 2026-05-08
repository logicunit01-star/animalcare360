import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | AnimalCare360 – Pakistan's #1 Livestock ERP",
    default: "AnimalCare360 – Pakistan's #1 Livestock & Farm Management ERP",
  },
  description:
    "AnimalCare360 is Pakistan's leading livestock management software. ERP solutions for cattle farms, wanda feed retailers, animal traders, and pet hospitals in Lahore, Karachi, Islamabad & across Pakistan.",
  keywords: [
    "livestock software Pakistan",
    "cattle management software Pakistan",
    "farm ERP Pakistan",
    "wanda ERP software Pakistan",
    "maweshi software",
    "animal care software Pakistan",
    "dairy farm software Pakistan",
    "pet hospital software Pakistan",
    "animal trading software Pakistan",
    "FBR compliant farm software",
    "livestock tracking Pakistan",
    "مویشی سافٹ ویئر",
    "فارم مینجمنٹ سافٹ ویئر",
    "Hulm Solutions",
  ],
  authors: [{ name: "Hulm Solutions", url: "https://hulmsolutions.com" }],
  creator: "Hulm Solutions",
  publisher: "Hulm Solutions",
  metadataBase: new URL("https://animalcare360.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "AnimalCare360",
    title: "AnimalCare360 – Pakistan's #1 Livestock & Farm Management ERP",
    description:
      "Specialized ERP for cattle farms, wanda feed retailers, animal traders & pet hospitals across Pakistan. FBR-compliant, cloud-based, built for Pakistan.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnimalCare360 – Pakistan's #1 Livestock ERP",
    description: "Farm ERP, Wanda Software, Pet Hospital ERP – all in one hub for Pakistan.",
  },
  other: {
    "geo.region": "PK",
    "geo.placename": "Pakistan",
    "geo.position": "30.3753;69.3451",
    "ICBM": "30.3753, 69.3451",
    "DC.language": "en",
    "DC.coverage": "Pakistan",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans antialiased bg-brand-background text-brand-navy">
        <div className="bg-brand-navy text-white text-[11px] py-1.5 px-6 sm:px-10 flex justify-between items-center tracking-widest uppercase font-medium">
          <span>A product of Hulm Solutions</span>
          <span className="hidden sm:inline">WhatsApp / Call: +92 339 111 9259</span>
        </div>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
