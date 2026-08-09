import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.animalcare360.com";
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-TJ0KRLP23C";
const googleTagManagerId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-KJJQPCZ8";
const microsoftClarityId = process.env.NEXT_PUBLIC_CLARITY_ID ?? "wr1d57nths";
const shouldLoadDirectGA = googleAnalyticsId && !googleTagManagerId;

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "900"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Animal Care 360 | Livestock, Feed Retail & Pet Hospital Software",
    description:
        "Manage livestock, feed retail, animal trading and pet hospitals with one powerful cloud-based software platform. Digital invoices, milk production charts, EMR clinic logs.",
    keywords: [
        "livestock software",
        "cattle management software",
        "farm ERP",
        "feed retail software",
        "animal care software",
        "dairy farm software",
        "pet hospital software",
        "animal trading software",
        "compliant farm software",
        "livestock tracking",
    ],
    authors: [{ name: "AnimalCare360", url: siteUrl }],
    creator: "AnimalCare360",
    publisher: "AnimalCare360",
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: "/",
    },

    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "AnimalCare360",
        title: "AnimalCare360 – Modern Livestock & Farm Management ERP",
        description:
            "Specialized ERP for cattle farms, wanda feed retailers, animal traders & pet hospitals. Cloud-based, built for the modern animal industry.",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "AnimalCare360 – Modern Livestock ERP",
        description: "Farm ERP, Wanda Software, Pet Hospital ERP – all in one hub.",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={outfit.variable}>
            <body className="font-sans antialiased bg-brand-background text-brand-navy">
                {googleTagManagerId ? (
                    <Script
                        id="google-tag-manager"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                              })(window,document,'script','dataLayer','${googleTagManagerId}');
                            `,
                        }}
                    />
                ) : null}
                {googleTagManagerId ? (
                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
                            height="0"
                            width="0"
                            style={{ display: "none", visibility: "hidden" }}
                        />
                    </noscript>
                ) : null}
                {/* Global Structured Data - Organization Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "@id": `${siteUrl}/#organization`,
                            "name": "AnimalCare360",
                            "url": siteUrl,
                            "logo": {
                                "@type": "ImageObject",
                                "url": `${siteUrl}/logo.png`
                            },
                            "sameAs": [
                                "https://facebook.com/animalcare360",
                                "https://twitter.com/animalcare360"
                            ],
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+92-339-111-9259",
                                "contactType": "customer service",
                                "availableLanguage": ["English"]
                            }
                        })
                    }}
                />
                <div className="bg-brand-navy text-white text-[11px] py-1.5 px-6 sm:px-10 flex justify-center items-center tracking-widest uppercase font-medium text-center">
                    <span>Built for modern livestock, feed retail, trading, and veterinary businesses | WhatsApp: +92 339 111 9259</span>
                </div>
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
                <FloatingWhatsApp />
                {/* Microsoft Clarity Analytics */}
                {microsoftClarityId ? (
                    <Script
                        id="microsoft-clarity"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                              (function(c,l,a,r,i,t,y){
                                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                              })(window, document, "clarity", "script", "${microsoftClarityId}");
                            `,
                        }}
                    />
                ) : null}
                {/* Google Analytics (gtag.js) */}
                {shouldLoadDirectGA ? (
                    <>
                        <Script
                            id="google-analytics-loader"
                            strategy="afterInteractive"
                            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
                        />
                        <Script
                            id="google-analytics-config"
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{
                                __html: `
                                  window.dataLayer = window.dataLayer || [];
                                  function gtag(){dataLayer.push(arguments);}
                                  gtag('js', new Date());
                                  gtag('config', '${googleAnalyticsId}');
                                `,
                            }}
                        />
                    </>
                ) : null}
            </body>
        </html>
    );
}
