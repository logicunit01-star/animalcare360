import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import LeadInteractionTracker from "@/components/LeadInteractionTracker";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.animalcare360.com";
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-TJ0KRLP23C";
const googleTagManagerId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-KJJQPCZ8";
const microsoftClarityId = process.env.NEXT_PUBLIC_CLARITY_ID ?? "wr1d57nths";
const shouldLoadDirectGA = Boolean(googleAnalyticsId);

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "900"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Cattle Fattening Management Software | AnimalCare360",
    description:
        "Know the cost, weight performance, and profit of every animal. Manage cattle purchases, feed, weight, health, expenses, inventory, and sales.",
    keywords: [
        "cattle fattening software",
        "beef finishing software",
        "feedlot management software",
        "cattle management software",
        "farm ERP",
        "feed retail software",
        "animal care software",
        "dairy farm software",
        "pet hospital software",
        "animal trading software",
        "animal costing software",
        "cattle profit software",
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
        title: "AnimalCare360 | Cattle Fattening Management Software",
        description:
            "Track cattle from purchase to sale and understand cost, weight performance, feed, health, and expected profit.",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "AnimalCare360 | Cattle Fattening Management Software",
        description: "Know the cost, weight performance, and profit of every animal.",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={outfit.variable}>
            <head>
                {googleTagManagerId ? (
                    <Script
                        id="google-tag-manager"
                        strategy="beforeInteractive"
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
                {shouldLoadDirectGA ? (
                    <>
                        <Script
                            id="google-analytics-loader"
                            strategy="beforeInteractive"
                            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
                        />
                        <Script
                            id="google-analytics-config"
                            strategy="beforeInteractive"
                            dangerouslySetInnerHTML={{
                                __html: `
                                  window.dataLayer = window.dataLayer || [];
                                  function gtag(){dataLayer.push(arguments);}
                                  gtag('js', new Date());
                                  gtag('config', '${googleAnalyticsId}', { send_page_view: ${googleTagManagerId ? 'false' : 'true'} });
                                `,
                            }}
                        />
                    </>
                ) : null}
            </head>
            <body className="font-sans antialiased bg-brand-background text-brand-navy">
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
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+92-339-111-9259",
                                "contactType": "customer service",
                                "availableLanguage": ["English"],
                                "areaServed": "Worldwide"
                            },
                            "description": "Cattle fattening and livestock operations software for animal costing, feed, weight, health, inventory, and profitability."
                        })
                    }}
                />
                <div className="flex min-h-8 items-center justify-center bg-brand-navy px-5 py-2 text-center text-[11px] font-semibold text-white">
                    <span>Cattle economics from purchase to sale.</span>
                </div>
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
                <FloatingWhatsApp />
                <LeadInteractionTracker />
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
            </body>
        </html>
    );
}
