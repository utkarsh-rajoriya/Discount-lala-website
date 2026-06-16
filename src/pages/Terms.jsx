import { useRef } from "react";
import { motion, useInView } from "motion/react";

const SECTIONS = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `Welcome to Discount Lala ("we," "our," or "us"). These Terms and Conditions govern your access to and use of the Discount Lala mobile application and website (collectively, the "Platform"). By downloading, registering, or using our Platform, you agree to be bound by these Terms. Please read them carefully before proceeding.

If you do not agree to any part of these Terms, you must not use our Platform. We reserve the right to update these Terms at any time, and your continued use of the Platform constitutes acceptance of any changes.`,
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    content: `To use Discount Lala, you must:

• Be at least 18 years of age, or have parental/guardian consent if between 13–17 years.
• Be a resident of India or a person visiting India during the period of booklet use.
• Have a valid mobile phone number capable of receiving OTP (One-Time Password) for authentication.
• Agree to provide accurate, complete, and current information during registration and maintain the accuracy of such information.

We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion if we believe a user does not meet these eligibility criteria.`,
  },
  {
    id: "account",
    title: "3. Account Registration & Security",
    content: `When you create an account on Discount Lala:

• You are responsible for maintaining the confidentiality of your account credentials.
• You agree to notify us immediately of any unauthorized access to your account.
• One mobile number may only be associated with one active account.
• You must not share your account or allow others to use your coupons on your behalf, except where explicitly permitted.
• We reserve the right to suspend or terminate accounts we believe are being used fraudulently or in violation of these Terms.

You are solely responsible for all activities conducted through your account.`,
  },
  {
    id: "purchases",
    title: "4. Purchases & Payments",
    content: `Discount Lala offers city-specific discount booklets and add-ons for purchase:

• All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.
• Payments are processed securely via Razorpay. We do not store your card or banking details on our servers.
• A purchase is confirmed only upon receipt of a successful payment confirmation.
• In case of payment failure, the amount debited (if any) will be refunded to your original payment method within 5–7 business days.
• Discount Lala booklets are non-transferable and tied to your registered account.`,
  },
  {
    id: "offers",
    title: "5. Offers, Coupons & Booklets",
    content: `When using discount offers and coupons through Discount Lala:

• Each offer has a defined validity period and specific terms set by the partner venue. Please check offer details carefully before visiting.
• Coupons are single-use unless explicitly stated as multi-use.
• Offers cannot be combined with other discounts or promotions unless stated otherwise.
• Partner venues reserve the right to change or withdraw offers with reasonable notice. In such cases, Discount Lala will endeavour to notify affected users.
• Discount Lala is not responsible for the quality of services provided by partner venues. Any disputes regarding service quality should be resolved directly with the venue.
• We do not guarantee the availability of seats or services at partner venues. Advance booking is recommended.`,
  },
  {
    id: "referrals",
    title: "6. Referral Program",
    content: `Discount Lala offers a referral program subject to the following terms:

• Each user receives a unique referral code upon account activation.
• Referral rewards are granted only when the referred user successfully completes their first booklet purchase.
• Referral rewards may be in the form of credits, discounts, or other benefits at Discount Lala's discretion.
• Abuse of the referral program — including creating fake accounts, self-referrals, or fraudulent referrals — will result in immediate account termination and forfeiture of all rewards.
• Discount Lala reserves the right to modify or discontinue the referral program at any time without prior notice.`,
  },
  {
    id: "refunds",
    title: "7. Payments, Refunds & Cancellations",
    content: `Our refund and cancellation policy is as follows:

• Booklets are non-refundable once purchased, except in cases where a technical error occurred during the purchase process.
• If a booklet was purchased but access was not granted due to a platform error, we will provide a full refund or equivalent credit within 7 business days.
• Unused coupons do not entitle users to a refund or credit.
• If a partner venue permanently closes before your coupon expires, we will offer a replacement offer or platform credit of equivalent value.
• Refund requests must be submitted to support within 48 hours of the qualifying incident.
• Refunds are processed to the original payment method and may take 5–10 business days depending on your bank.`,
  },
  {
    id: "prohibited",
    title: "8. Prohibited Conduct",
    content: `You agree NOT to:

• Use the Platform for any unlawful purpose or in violation of any applicable Indian laws.
• Sell, transfer, or sublicense your account, coupons, or booklets to another party.
• Reverse engineer, decompile, or attempt to extract the source code of our application.
• Use automated tools (bots, scrapers) to access or interact with the Platform.
• Post or transmit harmful, offensive, or defamatory content.
• Attempt to gain unauthorized access to other users' accounts or our backend systems.
• Engage in any activity that disrupts or interferes with the Platform's operation.
• Create multiple accounts to exploit referral rewards or promotions.

Violation of any of these prohibitions may result in immediate account suspension and legal action.`,
  },
  {
    id: "ip",
    title: "9. Intellectual Property",
    content: `All content on the Discount Lala Platform — including but not limited to logos, graphics, UI designs, text, software, and data compilations — is the exclusive property of Discount Lala or its licensors and is protected by Indian and international intellectual property laws.

You are granted a limited, non-exclusive, non-transferable licence to access and use the Platform for personal, non-commercial purposes only. You may not reproduce, distribute, modify, or create derivative works of any Platform content without our prior written consent.

The "Discount Lala" name, logo, and all related marks are trademarks of Discount Lala. Any use of our trademarks without permission is strictly prohibited.`,
  },
  {
    id: "liability",
    title: "10. Limitation of Liability",
    content: `To the maximum extent permitted by applicable law:

• Discount Lala is not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform or partner venue services.
• Our total liability to you for any claim arising from your use of the Platform shall not exceed the amount you paid for the specific booklet giving rise to the claim.
• We do not warrant that the Platform will be uninterrupted, error-free, or free of viruses or other harmful components.
• We are not responsible for the acts or omissions of third-party partner venues, including but not limited to service quality, hygiene, pricing errors, or venue closures.
• Discount Lala is not a party to any transaction between you and a partner venue; we act solely as a facilitator.`,
  },
  {
    id: "governing-law",
    title: "11. Governing Law & Dispute Resolution",
    content: `These Terms are governed by and construed in accordance with the laws of India, without regard to conflict of law provisions.

Any dispute arising from or relating to these Terms or your use of the Platform shall first be attempted to be resolved through good-faith negotiation. If such negotiation fails within 30 days, the dispute shall be referred to binding arbitration under the Arbitration and Conciliation Act, 1996.

The seat of arbitration shall be [City], India, and proceedings shall be conducted in English. Each party shall bear its own costs of arbitration unless the arbitrator awards otherwise.

Notwithstanding the above, either party may seek injunctive or other equitable relief in a court of competent jurisdiction in India.`,
  },
  {
    id: "privacy",
    title: "12. Privacy Policy",
    content: `Your privacy is important to us. Our collection, use, and protection of your personal data is governed by our Privacy Policy, which is incorporated into these Terms by reference.

By using Discount Lala, you consent to:
• Collection of your mobile number, name, and usage data for account and service purposes.
• Use of your location data (with permission) to show relevant city-based deals.
• Receiving transactional and promotional communications via SMS and push notifications (you may opt out at any time).

We do not sell your personal data to third parties. Data is shared with partner venues only to the extent necessary to fulfil your redeemed offers.`,
  },
  {
    id: "contact",
    title: "13. Contact Us",
    content: `If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact us:

📧 Email: support@discountlala.in
📞 Phone: +91-XXXXXXXXXX (Mon–Sat, 9 AM – 6 PM IST)
🏢 Address: Discount Lala Technologies Pvt. Ltd., [City], India

We aim to respond to all queries within 48 business hours.

These Terms and Conditions were last updated on June 16, 2026.`,
  },
];

function Section({ section, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      id={section.id}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-rose-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
          {index + 1}
        </span>
        {section.title.replace(/^\d+\.\s/, "")}
      </h3>
      <div className="text-slate-600 leading-relaxed whitespace-pre-line text-[15px]">
        {section.content}
      </div>
    </motion.div>
  );
}

export default function Terms({ onNavigate }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
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
            <img src="/assets/discount_lala_fav.jpeg" className="w-6 h-6 rounded-md" alt="" />
            <span className="font-bold text-slate-900 text-sm">Discount <span className="text-orange-500">Lala</span></span>
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
              📄 Legal Document
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Terms &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
                Conditions
              </span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Please read these terms carefully before using the Discount Lala platform. Your use of our services constitutes acceptance of these terms.
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Last updated: June 16, 2026
            </p>
          </motion.div>
        </div>
      </div>

      {/* Table of contents */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
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
                <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                {section.title.replace(/^\d+\.\s/, "")}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Agreement note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8"
        >
          <span className="text-xl flex-shrink-0">⚠️</span>
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>Important:</strong> By creating an account or purchasing a booklet on Discount Lala, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
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
          <img src="/assets/discount_lala_fav.jpeg" className="w-12 h-12 rounded-2xl mx-auto mb-4 object-cover" alt="" />
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Discount Lala Technologies Pvt. Ltd. All rights reserved.
          </p>
          <button
            onClick={() => onNavigate("home")}
            className="mt-4 inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors"
          >
            ← Return to Home
          </button>
        </motion.div>
      </div>
    </div>
  );
}
