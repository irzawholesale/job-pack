import Link from "next/link";

// Stripe payment links per tier
const STRIPE_STARTER = "https://buy.stripe.com/7sYaEP8dk5lQb2y02T2Ry02";
const STRIPE_PRO = "https://buy.stripe.com/4gMfZ9bpwdSmeeK3f52Ry01";
const STRIPE_EXECUTIVE = "https://buy.stripe.com/5kQ7sDals4hM6MibLB2Ry00";
const CONTACT_EMAIL = "hello@jobpack.com";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO = RECOGNITION */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            You&apos;re not doing anything wrong.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Most resumes are filtered out before a human ever reads them.
            The system is the bottleneck &mdash; not your experience.
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            If you&apos;ve been applying consistently and hearing nothing back,
            the problem is almost certainly structural, not personal.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link
              href={STRIPE_STARTER}
              className="inline-block bg-white text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get your Job Pack (48h delivery)
            </Link>
            <Link
              href="#pricing"
              className="text-gray-400 hover:text-white text-base underline underline-offset-4 transition-colors"
            >
              See what&apos;s included
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-gray-950 text-gray-400 py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm font-medium">
          <span>One-shot sprint</span>
          <span className="hidden sm:inline text-gray-600">|</span>
          <span>48h delivery</span>
          <span className="hidden sm:inline text-gray-600">|</span>
          <span>No subscriptions &bull; No guarantees</span>
        </div>
      </div>

      {/* THE REAL PROBLEM — ATS blind spot reveal */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            The real problem isn&apos;t your experience
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p className="text-xl font-medium text-gray-900">
              75% of resumes are rejected before a human ever reads them.
            </p>
            <p>
              It&apos;s not because you&apos;re unqualified. It&apos;s because Applicant Tracking
              Systems &mdash; the software that screens every application &mdash; can&apos;t read
              your resume the way a person would.
            </p>
            <p>
              Beautiful formatting? ATS sees gibberish. Two-column layout? ATS reads it as one
              garbled line. Missing a keyword the system expects? You&apos;re invisible.
            </p>
            <p>
              Someone with half your experience but a properly formatted resume gets the
              interview. You don&apos;t.
            </p>
            <p className="text-gray-900 font-semibold text-xl">
              That&apos;s not a you problem. That&apos;s a translation problem.
            </p>
          </div>
        </div>
      </section>

      {/* THE NUMBERS — Borrowed authority via stats */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            The numbers behind the silence
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "75%", label: "of resumes rejected by ATS before human review", source: "SHRM" },
              { stat: "98%", label: "of Fortune 500 companies use ATS software", source: "Jobscan" },
              { stat: "250", label: "average applicants per corporate job opening", source: "Glassdoor" },
              { stat: "8 sec", label: "average recruiter review time for resumes that pass ATS", source: "Indeed" },
            ].map((item) => (
              <div key={item.stat} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{item.stat}</div>
                <p className="text-gray-600 text-sm mb-2">{item.label}</p>
                <p className="text-gray-400 text-xs">{item.source}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-base">
            The system isn&apos;t designed for you to succeed. It&apos;s designed to filter.
            Your job is to get past the filter.
          </p>
        </div>
      </section>

      {/* ORIENTATION — Why effort ≠ results */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Why effort alone doesn&apos;t work anymore
          </h2>
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
            <p>
              Most job seekers assume that if their resume &ldquo;looks fine&rdquo; and they&apos;re applying to enough roles,
              results should follow. When they don&apos;t, the conclusion is usually &ldquo;I need to try harder&rdquo; or
              &ldquo;something is wrong with me.&rdquo;
            </p>
            <p>
              Neither is true. The issue is structural: applicant tracking systems filter resumes
              using keyword matching, role alignment, and formatting rules that have nothing to do
              with your actual competence. A resume that reads well to a person can score
              poorly in a system that never shows it to one.
            </p>
            <p>
              On top of that, most people apply to roles where they&apos;re either overqualified,
              underqualified, or misaligned in ways they can&apos;t see from the job listing alone.
              The result is effort that feels productive but produces no signal.
            </p>
            <p className="text-gray-900 font-medium">
              The fix isn&apos;t more effort. It&apos;s knowing exactly where the gap is &mdash;
              presentation, alignment, or both &mdash; and closing it in one pass.
            </p>
          </div>
        </div>
      </section>

      {/* AGENCY — What you'll know after 48 hours */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            What you&apos;ll know after 48 hours
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The guessing ends. These are the specific uncertainties that get resolved.
          </p>
          <div className="space-y-6">
            {[
              {
                title: "Whether your resume is the bottleneck",
                desc: "You\u2019ll have an ATS-optimized CV built for your target role. If formatting or keyword alignment was the problem, it\u2019s fixed.",
              },
              {
                title: "Which roles you\u2019re actually competitive for",
                desc: "Your ranked job links aren\u2019t a generic list. They\u2019re filtered by fit \u2014 so you stop wasting applications on roles that were never going to respond.",
              },
              {
                title: "Where your effort should actually go",
                desc: "Instead of applying broadly and hoping, you\u2019ll have a short list of roles where your profile is a genuine match. Effort becomes targeted.",
              },
              {
                title: "Whether the issue is presentation or alignment",
                desc: "If your resume is strong but you\u2019re applying to the wrong roles, you\u2019ll see it. If the roles are right but your materials don\u2019t communicate fit, you\u2019ll see that too.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES — PFS Framework: Problem → Feature → Solution */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            What You Get
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Three deliverables. Each one solves a specific problem.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-red-500 mb-3 uppercase tracking-wide">The problem</p>
              <p className="text-gray-600 text-sm mb-4">
                Your resume looks fine to you &mdash; but ATS software can&apos;t parse the formatting,
                misses your keywords, and filters you out before a recruiter sees it.
              </p>
              <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide">What we build</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ATS-Optimized CV</h3>
              <p className="text-gray-600 text-sm mb-4">
                Rebuilt from scratch for your target role. Clean formatting ATS can read,
                keywords pulled from real job descriptions, achievements quantified.
              </p>
              <p className="text-sm font-medium text-green-600 mb-2 uppercase tracking-wide">What that means</p>
              <p className="text-gray-900 font-medium text-sm">
                Your resume passes the filter. Recruiters actually see it.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-red-500 mb-3 uppercase tracking-wide">The problem</p>
              <p className="text-gray-600 text-sm mb-4">
                You&apos;re applying to dozens of roles with no way to know which ones
                you&apos;re actually competitive for. Most applications go nowhere.
              </p>
              <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide">What we build</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">10&ndash;20 Ranked Job Links</h3>
              <p className="text-gray-600 text-sm mb-4">
                Roles sourced and ranked by how well your background matches.
                Each one includes a fit rationale &mdash; not just a link.
              </p>
              <p className="text-sm font-medium text-green-600 mb-2 uppercase tracking-wide">What that means</p>
              <p className="text-gray-900 font-medium text-sm">
                You stop spraying applications and start targeting roles where you belong.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-red-500 mb-3 uppercase tracking-wide">The problem</p>
              <p className="text-gray-600 text-sm mb-4">
                Generic cover letters get ignored. But writing a tailored one for every
                application takes hours you don&apos;t have.
              </p>
              <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide">What we build</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cover Letter Template</h3>
              <p className="text-gray-600 text-sm mb-4">
                A customizable template that connects your experience to the role
                in language hiring managers respond to. Pro &amp; Exec tiers.
              </p>
              <p className="text-sm font-medium text-green-600 mb-2 uppercase tracking-wide">What that means</p>
              <p className="text-gray-900 font-medium text-sm">
                Every application has a cover letter that sounds like you wrote it for that specific role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            One transaction. One intake form. One delivery.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Choose Your Package", desc: "Select the tier that fits your needs" },
              { step: "2", title: "Fill Intake Form", desc: "Share your experience and target role" },
              { step: "3", title: "We Get to Work", desc: "Your materials are built for your specific situation" },
              { step: "4", title: "Receive & Apply", desc: "Get your pack within 48 hours" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE COST OF NOT KNOWING — Money reframe + price anchoring */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            What you&apos;re already spending
          </h2>
          <div className="space-y-4 mb-8">
            {[
              { item: "LinkedIn Premium", cost: "$360/year" },
              { item: "Professional resume writer", cost: "$300 \u2013 $2,000" },
              { item: "Career coach (per hour)", cost: "$150+" },
              { item: "Job board subscriptions", cost: "$25 \u2013 $50/month" },
              { item: "Time lost to applications that never get seen", cost: "incalculable" },
            ].map((row) => (
              <div key={row.item} className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">{row.item}</span>
                <span className="text-gray-900 font-semibold">{row.cost}</span>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 text-white p-8 rounded-xl text-center">
            <p className="text-3xl font-bold mb-2">Job Pack: $99. One time.</p>
            <p className="text-gray-400">
              Done in 48 hours. Less than one month of LinkedIn Premium combined with a resume review.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ — Exhaust questions BEFORE price drop (masterclass principle) */}
      <section id="faq" className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Questions you probably have
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does delivery take?",
                a: "All tiers are delivered within 48 hours of completing the intake form.",
              },
              {
                q: "What if I\u2019m not satisfied?",
                a: "Each package includes 1 revision round. Contact us via email with your feedback and we\u2019ll make changes.",
              },
              {
                q: "Do you work with all industries?",
                a: "Yes \u2014 tech, finance, healthcare, marketing, engineering, and more.",
              },
              {
                q: "What format do I receive the documents in?",
                a: "Your CV comes as both PDF and editable DOCX. Cover letter template (Pro/Exec) is an editable document.",
              },
              {
                q: "Can I target multiple job titles?",
                a: "Each package is optimized for one target role. Need multiple versions? Contact us for a custom quote.",
              },
              {
                q: "How do revisions work?",
                a: "After delivery, request changes via email. We implement feedback within 24\u201348 hours per revision round.",
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

      {/* ALIGNMENT — Get the head-nod before showing price */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xl sm:text-2xl text-gray-900 font-medium leading-relaxed">
            If your resume isn&apos;t getting past ATS filters &mdash; and you know it &mdash;
            the question isn&apos;t whether to fix it. It&apos;s whether to spend 40 more hours
            figuring it out yourself, or let someone who&apos;s done it hundreds of times
            handle it in 48 hours.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24">
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
        </div>
      </section>

      {/* Boundaries Section — UNTOUCHED */}
      <section className="py-16 sm:py-24 bg-gray-50">
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
              <div key={item} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA = CLOSURE — Future state + presupposition */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Two weeks from now, you&apos;ll either still be refreshing your inbox &mdash;
            or you&apos;ll know exactly which companies to target and why you&apos;re competitive for each one.
          </h2>
          <p className="text-lg text-gray-400 mb-4 max-w-2xl mx-auto">
            When you open your Job Pack, you&apos;ll find a resume that speaks the language ATS
            software understands, a list of roles selected specifically for your background,
            and a guide that tells you exactly what to do next.
          </p>
          <p className="text-lg text-gray-500 mb-10">
            The job search doesn&apos;t have to feel like shouting into a void.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link
              href={STRIPE_STARTER}
              className="inline-block bg-white text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get your Job Pack (48h delivery)
            </Link>
            <Link
              href="#pricing"
              className="text-gray-500 hover:text-white text-base underline underline-offset-4 transition-colors"
            >
              See what&apos;s included
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
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
            &copy; {new Date().getFullYear()} Job Pack. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
