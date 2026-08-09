import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Smartphone, ShieldCheck, Globe, CheckCircle2, ChevronRight, Settings } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Download AnimalCare360 Mobile App | Cattle Management App",
  description: "Download the AnimalCare360 Android app. Use the livestock management app to track cattle, farm records, inventory, and operations from mobile.",
};

export default function DownloadApp() {
  const apkLink = "https://drive.google.com/file/d/1PSXIkFQKHog5Ef1Ql7WYILBK9XuKU5Ti/view?usp=sharing";
  const faqs = [
    { q: "Who should use the AnimalCare360 Android app?", a: "Farm owners, managers, field staff, veterinarians, shop staff, and clinic teams can use the Android app to enter daily records closer to the work." },
    { q: "What can staff record from mobile?", a: "Staff can record animal updates, milk entries, weight records, treatments, vaccinations, stock checks, alerts, and daily operating activity depending on enabled modules." },
    { q: "Is the APK official?", a: "Yes. The APK linked on this page is provided by AnimalCare360. Only download it from this page or from a link shared directly by the AnimalCare360 team." },
    { q: "Does the app replace the web portal?", a: "No. The Android app supports mobile field workflows, while the web portal remains useful for dashboards, reports, setup, and management review." }
  ];

  return (
    <div>
      {/* Download App Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.animalcare360.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Download App",
                "item": "https://www.animalcare360.com/download-app"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })
        }}
      />
      {/* Hero Section */}
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-brand-primary/20 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-brand-primary" />
              </div>
              <p className="text-brand-primary font-bold text-xs uppercase tracking-widest">Mobile ERP Edition</p>
            </div>
            <h1 className="text-5xl font-bold mb-8 leading-tight tracking-tight">
              Download the AnimalCare360 Android App
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              Use AnimalCare360 from the farm, shop, clinic, or field. The Android app helps owners, managers, vets, and staff record updates faster and stay connected with daily operations from a livestock management app.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={apkLink} target="_blank" rel="noopener noreferrer" className="bg-brand-primary hover:bg-opacity-90 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-brand-primary/20 flex items-center gap-3">
                <Download className="w-5 h-5" /> Download APK Now
              </a>
            </div>
            <p className="text-sm text-slate-400 mt-6 flex items-start gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
              <span>The APK is provided directly by AnimalCare360. Only download it from this official page or a link shared by the AnimalCare360 team.</span>
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary opacity-10 blur-3xl -z-0"></div>
      </section>

      {/* Why Use the Mobile App */}
      <section className="py-24 bg-brand-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-6 tracking-tight">Farm Management Without Boundaries</h2>
            <p className="text-brand-muted max-w-2xl mx-auto text-lg leading-relaxed">
              You don&apos;t need to be glued to your office desk. The AnimalCare360 mobile app ensures your farm&apos;s data travels with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Add milk entries" },
              { title: "Record vaccination and treatment" },
              { title: "Check animal profiles" },
              { title: "Update weight records" },
              { title: "Review stock and alerts" },
              { title: "Receive task notifications" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 border border-brand-border rounded-[24px] shadow-sm flex items-center gap-4 hover:shadow-md transition-all">
                <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0" />
                <h3 className="font-bold text-brand-navy">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="bg-brand-background border border-brand-border rounded-[32px] p-8 md:p-10 mb-16">
            <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">Quick Answer</p>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">What is the AnimalCare360 Android app used for?</h2>
            <p className="text-brand-muted leading-relaxed max-w-4xl">
              The AnimalCare360 Android app helps teams record daily farm, shop, clinic, and field activity without waiting to return to a desktop. This livestock management app supports faster updates for animal records, milk, weight, health, vaccinations, inventory checks, and task visibility while owners continue using the web portal for reporting and setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Farm And Field Staff", desc: "Record health, vaccination, breeding, milk, weight, and animal status updates while working near the herd or flock." },
              { title: "Shop And Inventory Teams", desc: "Review stock alerts, inventory status, and daily operational updates for wanda, feed, medicine, and retail workflows." },
              { title: "Owners And Managers", desc: "Stay connected with daily records, task progress, and operational visibility while using the web portal for deeper reports." }
            ].map((item) => (
              <div key={item.title} className="bg-white border border-brand-border rounded-[28px] p-7">
                <Smartphone className="w-8 h-8 text-brand-primary mb-5" />
                <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-brand-navy mb-12 text-center tracking-tight">How to Install the APK</h2>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-7 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-border before:to-transparent">

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white bg-brand-primary text-white font-bold text-xl shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  1
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white border border-brand-border p-6 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Download className="w-5 h-5 text-brand-primary" />
                    <h3 className="font-bold text-brand-navy text-lg">Download the File</h3>
                  </div>
                  <p className="text-brand-muted">Click the download button above. The APK file will start downloading via Google Drive to your Android device.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white bg-brand-primary text-white font-bold text-xl shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  2
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white border border-brand-border p-6 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Settings className="w-5 h-5 text-brand-primary" />
                    <h3 className="font-bold text-brand-navy text-lg">Allow Unknown Sources</h3>
                  </div>
                  <p className="text-brand-muted">If prompted, go to your phone&apos;s <strong className="text-brand-navy">Settings &gt; Security</strong> and enable <strong className="text-brand-navy">&quot;Install from Unknown Sources&quot;</strong>. This allows installing apps outside the Play Store.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white bg-brand-primary text-white font-bold text-xl shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  3
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white border border-brand-border p-6 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                    <h3 className="font-bold text-brand-navy text-lg">Install and Open</h3>
                  </div>
                  <p className="text-brand-muted">Open your File Manager, tap on the downloaded <strong className="text-brand-navy">AnimalCare360.apk</strong> file, and press Install. Once done, log in and start managing your farm!</p>
                </div>
              </div>

            </div>

            <div className="mt-16 text-center">
              <a href={apkLink} target="_blank" rel="noopener noreferrer" className="btn-primary !px-10 !py-4 inline-flex items-center gap-3">
                <Download className="w-5 h-5" /> Download AnimalCare360 APK
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-brand-navy mb-10 text-center tracking-tight">Mobile App FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white border border-brand-border rounded-2xl p-6">
                  <h3 className="font-bold text-brand-navy mb-3">{faq.q}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Digitize Your Farm?"
        subtitle="The mobile app syncs flawlessly with the web portal. Work seamlessly across all your devices."
      />
    </div>
  );
}
