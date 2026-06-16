import { useRef } from "react";
import { motion, useInView } from "motion/react";

const SECTIONS = [
  {
    id: "overview",
    title: "1. Overview",
    content: `Discount Lala ("we," "our," or "us") is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, who we share it with, and the choices you have.

By downloading or using the Discount Lala app or website (the "Platform"), you agree to the practices described in this policy. If you do not agree, please do not use the Platform.

This policy applies to all users of the Platform, including customers, visitors, and anyone who contacts us for support.`,
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: `We collect the following types of information:

**Information you provide directly:**
• Mobile phone number (required for account creation via OTP)
• Full name and email address (optional, provided during profile setup)
• Profile photo (optional, uploaded by you)
• Payment details — processed securely by Razorpay; we never store card or bank details on our servers

**Information collected automatically:**
• Device information (model, OS version, unique device identifiers)
• App usage data (features used, screens viewed, time spent)
• IP address and approximate location (city-level, to show relevant deals)
• Crash logs and performance diagnostics

**Information from third parties:**
• Authentication data from Firebase (phone verification status)
• Transaction confirmation data from Razorpay (order ID, payment status)`,
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: `We use your information for the following purposes:

• **Account management** — to create, verify, and maintain your Discount Lala account
• **Service delivery** — to provide booklets, process orders, and enable coupon redemption
• **Personalisation** — to recommend relevant deals and booklets based on your city and usage
• **Communications** — to send order confirmations, support responses, and (with your consent) promotional offers via SMS or push notification
• **Fraud prevention** — to detect and prevent abuse of our referral program, fake accounts, and unauthorised access
• **Analytics** — to understand how users interact with the Platform so we can improve it
• **Legal compliance** — to meet obligations under applicable Indian laws

We do not use your data for automated profiling that produces legal or similarly significant effects without human review.`,
  },
  {
    id: "data-sharing",
    title: "4. Data Sharing & Disclosure",
    content: `We do not sell your personal data. We share it only in the following circumstances:

**Service providers:**
• Firebase (Google) — phone authentication and cloud services
• Razorpay — payment processing
• Hosting and infrastructure providers — to operate the Platform securely

**Partner venues (limited):**
When you redeem a coupon at a partner venue, we may share your name and redemption details solely to validate the offer.

**Legal requirements:**
We may disclose your information if required by law, court order, or to protect the rights, safety, or property of Discount Lala or others.

**Business transfers:**
In the event of a merger, acquisition, or sale of assets, your data may be transferred. We will notify you before your data becomes subject to a different privacy policy.

All third-party service providers are contractually bound to process your data only as instructed by us and in accordance with this policy.`,
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    content: `We retain your personal data for as long as your account is active or as needed to provide services.

• **Account data** — retained until you delete your account or request deletion
• **Transaction records** — retained for 7 years to comply with Indian financial regulations
• **Usage analytics** — aggregated and anonymised data may be retained indefinitely
• **Support records** — retained for 2 years from the date of resolution

After the applicable retention period, data is securely deleted or anonymised. If you deactivate your account, your personal identifiers are removed within 30 days, though anonymised usage data may be retained for analytics purposes.`,
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    content: `Under applicable Indian data protection laws, you have the right to:

• **Access** — request a copy of the personal data we hold about you
• **Correction** — request that inaccurate or incomplete data be corrected
• **Deletion** — request deletion of your personal data (subject to legal retention obligations)
• **Portability** — request your data in a structured, machine-readable format
• **Withdraw consent** — where processing is based on consent, you may withdraw it at any time (this does not affect prior processing)
• **Opt out of marketing** — unsubscribe from promotional communications at any time via app settings or by contacting us

To exercise any of these rights, contact us at support@discountlala.in. We will respond within 30 days. We may need to verify your identity before processing the request.`,
  },
  {
    id: "cookies",
    title: "7. Cookies & Tracking Technologies",
    content: `Our website uses cookies and similar tracking technologies to:

• Keep you signed in across sessions
• Understand how pages are used (analytics)
• Remember your preferences

**Types of cookies we use:**
• **Essential cookies** — required for the Platform to function; cannot be disabled
• **Analytics cookies** — help us understand usage patterns (e.g., page views, session duration)
• **Preference cookies** — store your settings and city selection

You can control cookies via your browser settings. Disabling non-essential cookies will not affect your ability to use the core features of the Platform. Our mobile app uses similar device-level identifiers, which you can manage via your device's privacy settings.`,
  },
  {
    id: "security",
    title: "8. Data Security",
    content: `We take the security of your data seriously and implement industry-standard measures, including:

• TLS/HTTPS encryption for all data in transit
• Encrypted storage for sensitive fields at rest
• Role-based access controls — only authorised staff can access user data
• Regular security audits and vulnerability assessments
• Secure, isolated database environment via Supabase (hosted on AWS)

Despite these measures, no system is completely secure. If you suspect your account has been compromised, contact us immediately at support@discountlala.in or call +91 90682 25827.

In the event of a data breach that affects your rights, we will notify you as required by applicable law, without undue delay.`,
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    content: `The Discount Lala Platform is not intended for children under the age of 13. We do not knowingly collect personal data from children under 13.

If you are between 13 and 18, you must have parental or guardian consent to use the Platform. By using the Platform, you confirm that either you are 18 or older, or you have obtained the required parental consent.

If we discover that we have inadvertently collected data from a child under 13 without verifiable parental consent, we will delete that information as quickly as possible. If you believe this has occurred, please contact us at support@discountlala.in.`,
  },
  {
    id: "third-party-links",
    title: "10. Third-Party Links",
    content: `The Platform may contain links to third-party websites, apps, or services (e.g., partner venue websites). This Privacy Policy does not apply to those third parties.

We are not responsible for the privacy practices of third-party sites. We encourage you to read the privacy policy of every site you visit. Clicking on a third-party link is at your own risk.`,
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. When we make material changes, we will:

• Update the "Last updated" date at the top of this page
• Notify you via in-app notification or email (if you have provided one)
• For significant changes, request renewed consent where required by law

Your continued use of the Platform after the effective date of any changes constitutes acceptance of the updated policy. If you disagree with the changes, you may delete your account at any time.`,
  },
  {
    id: "contact-privacy",
    title: "12. Contact Us",
    content: `For any privacy-related questions, requests, or concerns, please reach out to us:

📧 Email: support@discountlala.in
📞 Phone: +91 90682 25827 (Mon–Sat, 9 AM – 6 PM IST)
🏢 Address: Discount Lala Technologies Pvt. Ltd., India

We aim to respond to all privacy-related requests within 30 days. For urgent security concerns, please call us directly.

This Privacy Policy was last updated on June 16, 2026.`,
  },
];

function Section({ section, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      id={section.id}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-rose-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
          {index + 1}
        </span>
        {section.title.replace(/^\d+\.\s/, "")}
      </h3>
      <div className="text-slate-600 leading-relaxed text-[15px] space-y-2">
        {section.content.split("\n").map((line, i) => {
          if (line.startsWith("**") && line.endsWith("**")) {
            return (
              <p key={i} className="font-semibold text-slate-800 mt-4 first:mt-0">
                {line.slice(2, -2)}
              </p>
            );
          }
          if (line.match(/^\*\*(.+?)\*\*/)) {
            const parts = line.split(/(\*\*[^*]+\*\*)/g);
            return (
              <p key={i} className={line.startsWith("•") ? "" : ""}>
                {parts.map((part, j) =>
                  part.startsWith("**") && part.endsWith("**") ? (
                    <strong key={j} className="font-semibold text-slate-800">
                      {part.slice(2, -2)}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </p>
            );
          }
          if (line === "") return <div key={i} className="h-1" />;
          return <p key={i}>{line}</p>;
        })}
      </div>
    </motion.div>
  );
}

export default function Privacy({ onNavigate }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 text-slate-500 hover:text-orange-500 transition-colors font-medium text-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
          <div className="h-5 w-px bg-slate-200" />
          <div className="flex items-center gap-2">
            <img src="/assets/discount_lala_fav.jpeg" className="w-6 h-6 rounded-md object-cover" alt="" />
            <span className="font-bold text-slate-900 text-sm">
              Discount <span className="text-orange-500">Lala</span>
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-slate-900 via-orange-950 to-rose-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
              🔒 Legal Document
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
                Policy
              </span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              We believe in full transparency about how your data is collected, used, and protected. This policy explains everything clearly.
            </p>
            <p className="text-slate-500 text-sm mt-4">Last updated: June 16, 2026</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Table of contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm mb-8"
        >
          <h2 className="font-bold text-slate-900 mb-4 text-lg">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {SECTIONS.map((section, i) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded-xl transition-colors"
              >
                <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 text-[10px] font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                {section.title.replace(/^\d+\.\s/, "")}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Info note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-8"
        >
          <span className="text-xl shrink-0">🔐</span>
          <p className="text-blue-800 text-sm leading-relaxed">
            <strong>Your data, your control.</strong> We only collect what's necessary to provide the service. We never sell your personal information to advertisers or third parties.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="flex flex-col gap-5">
          {SECTIONS.map((section, i) => (
            <Section key={section.id} section={section} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center py-10 border-t border-slate-200"
        >
          <img
            src="/assets/discount_lala_fav.jpeg"
            className="w-12 h-12 rounded-2xl mx-auto mb-4 object-cover"
            alt=""
          />
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Discount Lala Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={() => onNavigate("terms")}
              className="text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors"
            >
              Terms &amp; Conditions
            </button>
            <span className="text-slate-300">·</span>
            <button
              onClick={() => onNavigate("home")}
              className="text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
