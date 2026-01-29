import Link from "next/link";

// Stripe payment links per tier
const STRIPE_STARTER = "https://buy.stripe.com/7sYaEP8dk5lQb2y02T2Ry02";
const STRIPE_PRO = "https://buy.stripe.com/4gMfZ9bpwdSmeeK3f52Ry01";
const STRIPE_EXECUTIVE = "https://buy.stripe.com/5kQ7sDals4hM6MibLB2Ry00";
const CONTACT_EMAIL = "hello@jobpack.com";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto px-4 py-20 sm:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Land Your Dream Job Faster
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            ATS-ready CV, ranked job links, and interview prep
            tailored to your target role — delivered in 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link
              href={STRIPE_STARTER}
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get your Job Pack (48h delivery)
            </Link>
            <Link
              href="#pricing"
              className="text-blue-200 hover:text-white text-base underline underline-offset-4 transition-colors"
            >
              See what&apos;s included
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-gray-900 text-gray-300 py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm font-medium">
          <span>One-shot sprint</span>
          <span className="hidden sm:inline text-gray-600">|</span>
          <span>48h delivery</span>
          <span className="hidden sm:inline text-gray-600">|</span>
          <span>No subscriptions &bull; No guarantees</span>
        </div>
      </div>

      {/* Deliverables Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            What You Get
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The tools you need to land interviews faster
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ATS-Optimized CV</h3>
              <p className="text-gray-600">
                A clean, modern resume built to pass applicant tracking systems and catch recruiter attention.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ranked Job Links</h3>
              <p className="text-gray-600">
                10&ndash;20 hand-picked job links ranked by fit for your target role cluster. No more blind applications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cover Letter Template</h3>
              <p className="text-gray-600">
                A tailored cover letter template that connects your experience to the role. Pro &amp; Exec tiers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Simple, fast, and hassle-free
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Choose Your Package", desc: "Select the tier that fits your needs" },
              { step: "2", title: "Fill Intake Form", desc: "Share your experience and target role" },
              { step: "3", title: "We Get to Work", desc: "Our experts craft your materials" },
              { step: "4", title: "Receive & Apply", desc: "Get your pack within 48 hours" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the package that matches your job search needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-4">CV + ranked job links</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$99</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">ATS-optimized CV</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">10&ndash;20 ranked job links (one role cluster)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">1 revision</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">48-hour delivery</span>
                </li>
              </ul>
              <Link
                href={STRIPE_STARTER}
                className="block w-full text-center bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get your Job Pack (48h delivery)
              </Link>
              <p className="text-xs text-gray-400 text-center mt-3">Pay &rarr; complete intake &rarr; delivery in 48h.</p>
            </div>

            {/* Pro Tier */}
            <div className="bg-blue-600 p-8 rounded-xl shadow-lg border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-yellow-400 text-yellow-900 text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
              <p className="text-blue-100 mb-4">Starter + cover letter</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$199</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">ATS-optimized CV</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">10&ndash;20 ranked job links (one role cluster)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">Cover letter template</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">1 revision</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">48-hour delivery</span>
                </li>
              </ul>
              <Link
                href={STRIPE_PRO}
                className="block w-full text-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get your Job Pack (48h delivery)
              </Link>
              <p className="text-xs text-blue-200 text-center mt-3">Pay &rarr; complete intake &rarr; delivery in 48h.</p>
            </div>

            {/* Executive Tier */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Executive</h3>
              <p className="text-gray-600 mb-4">Pro + Interview Sprint</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$349</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Everything in Pro</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">60-min Interview Sprint (call)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Interview prep pack</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">1 revision</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">48-hour delivery</span>
                </li>
              </ul>
              <Link
                href={STRIPE_EXECUTIVE}
                className="block w-full text-center bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get your Job Pack (48h delivery)
              </Link>
              <p className="text-xs text-gray-400 text-center mt-3">Pay &rarr; complete intake &rarr; delivery in 48h.</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Not sure yet?{" "}
            <Link href="#faq" className="text-blue-600 hover:text-blue-800 underline underline-offset-4">
              Check the resume red flags
            </Link>
          </p>
        </div>
      </section>

      {/* Boundaries Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            What&apos;s Not Included
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We want to be upfront about what Job Pack does and doesn&apos;t cover
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "We don\u2019t apply on your behalf",
              "Interview coaching or mock interviews",
              "Job search strategy or job matching",
              "Salary negotiation support",
              "Portfolio or website creation",
              "Ongoing career coaching",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does delivery take?",
                a: "All tiers are delivered within 48 hours of completing the intake form.",
              },
              {
                q: "What if I'm not satisfied?",
                a: "Each package includes 1 revision round. Contact us via email with your feedback and we'll make changes.",
              },
              {
                q: "Do you work with all industries?",
                a: "Yes! We've worked with professionals across tech, finance, healthcare, marketing, engineering, and more.",
              },
              {
                q: "What format do I receive the documents in?",
                a: "You'll receive your CV as both PDF and editable DOCX. Cover letter template (Pro/Exec) comes as an editable document.",
              },
              {
                q: "Can I target multiple job titles?",
                a: "Each package is optimized for one target role. Need multiple versions? Contact us for a custom quote.",
              },
              {
                q: "How do revisions work?",
                a: "After delivery, you can request changes via email. We'll implement feedback within 24-48 hours per revision round.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Stand Out?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Stop sending applications into the void. Get a Job Pack that opens doors.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link
              href={STRIPE_STARTER}
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get your Job Pack (48h delivery)
            </Link>
            <Link
              href="#pricing"
              className="text-blue-200 hover:text-white text-base underline underline-offset-4 transition-colors"
            >
              See what&apos;s included
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xl font-semibold text-white mb-2">Job Pack</p>
          <p className="mb-4">Professional job search materials, delivered fast.</p>
          <p className="mb-6">
            Questions? Email us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300">
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Job Pack. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
