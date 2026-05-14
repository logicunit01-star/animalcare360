import React from "react";
import CTA from "@/components/CTA";

export default function TermsOfService() {
  return (
    <div className="pt-20 pb-0">
      <div className="section-container max-w-4xl">
        <div className="mb-16">
          <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-5xl font-black text-brand-navy mb-8 tracking-tight">Terms of Service</h1>
          <p className="text-brand-muted text-xl leading-relaxed">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-lg prose-slate max-w-none text-brand-muted space-y-8 mb-24">
          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using AnimalCare360 (the "Software"), a service provided by Hulm Solutions, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Software.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Description of Service</h2>
            <p>
              AnimalCare360 is a cloud-based ERP software suite designed for livestock farms, wanda and feed retailers, animal traders, and pet hospitals in Pakistan. The service is provided on a subscription or licensing basis. Features, modules, and availability may be updated over time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Subscriptions and Payments</h2>
            <p>
              Access to certain modules requires a paid subscription. Billing terms, cycle, and pricing are agreed upon during registration or as updated in your account dashboard. Failure to pay subscription fees may result in suspension or termination of access to the Software.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. User Responsibilities</h2>
            <p>
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Maintaining the confidentiality of your account credentials.</li>
              <li>The accuracy and legality of the data you enter into the Software (including FBR tax data).</li>
              <li>Ensuring your use of the Software complies with all applicable local laws and regulations in Pakistan.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Data Ownership</h2>
            <p>
              You retain all rights and ownership to the business data you input into AnimalCare360. Hulm Solutions does not claim ownership over your farm records, financial ledgers, or customer data. We process this data strictly to provide the service to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Disclaimer of Warranties</h2>
            <p>
              The Software is provided "as is" without warranties of any kind, whether express or implied. While we strive for maximum uptime and data integrity, Hulm Solutions does not warrant that the Software will be uninterrupted, error-free, or completely secure. We are not responsible for business losses resulting from software usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Hulm Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use or inability to use the Software.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any significant changes. Continued use of the Software after modifications constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Contact Information</h2>
            <p>For any questions or concerns regarding these Terms, please contact us at:</p>
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
