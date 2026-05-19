import React from "react";
import CTA from "@/components/CTA";

export default function PrivacyPolicy() {
  return (
    <div className="pt-20 pb-0">
      {/* Privacy Breadcrumb Schema */}
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
                "item": "https://animalcare360.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Privacy Policy",
                "item": "https://animalcare360.com/privacy"
              }
            ]
          })
        }}
      />
      <div className="section-container max-w-4xl">
        <div className="mb-16">
          <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-5xl font-bold text-brand-navy mb-8 tracking-tight">Privacy Policy</h1>
          <p className="text-brand-muted text-xl leading-relaxed">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-lg prose-slate max-w-none text-brand-muted space-y-8 mb-24">
          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Introduction</h2>
            <p>
              Welcome to AnimalCare360, a product by Hulm Solutions ("we," "our," or "us"). We are committed to protecting the privacy and security of your data. This Privacy Policy explains how we collect, use, and safeguard information when you use our livestock, retail, trading, and veterinary ERP software.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Account Information:</strong> Name, phone number, email address, and business details when you register.</li>
              <li><strong>Business Data:</strong> Records you input into our system, including animal details, financial ledgers, customer/supplier data, inventory, and FBR-related invoicing data.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our web and mobile applications to help us improve the system.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. How We Use Your Information</h2>
            <p>Your data is primarily used to provide you with ERP services. Specifically, we use it to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Facilitate your farm, clinic, trading, or retail operations.</li>
              <li>Generate reports, financial statements, and FBR-compliant invoices for your business.</li>
              <li>Provide customer support via WhatsApp or email.</li>
              <li>Improve and optimize our software modules.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Data Security & Storage</h2>
            <p>
              We implement industry-standard security measures to protect your business records against unauthorized access, alteration, or disclosure. All data is securely hosted on cloud servers with routine backups. However, no internet-based service can be 100% secure, and we encourage users to maintain strong passwords.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Data Sharing & Disclosure</h2>
            <p>
              We <strong>do not</strong> sell or rent your business data to third parties. We may only disclose data if:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Required by law or legal processes in Pakistan (e.g., FBR audits).</li>
              <li>Necessary to protect our rights, privacy, safety, or property.</li>
              <li>Working with trusted third-party service providers (like cloud hosting providers) under strict confidentiality agreements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Your Rights</h2>
            <p>
              As the business owner, you retain full ownership of the business data you enter into AnimalCare360. You have the right to access, update, export, or request deletion of your account and associated data by contacting our support team.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>WhatsApp/Phone:</strong> +92 339 111 9259</li>
              <li><strong>Website:</strong> https://hulmsolutions.com</li>
            </ul>
          </section>
        </div>
      </div>
      <CTA />
    </div>
  );
}
