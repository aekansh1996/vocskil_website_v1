import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                Welcome to VocSkill
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Upskill Yourself with Industry-Aligned Courses
              </h1>
              <p className="text-xl text-slate-600">
                Join thousands of professionals transforming their careers through live interactive learning in Management, Finance, and Analytics.
              </p>
              <div className="flex gap-4 pt-4">
                <Link
                  href="/programs"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Explore Courses
                </Link>
                <Link
                  href="/contact-us"
                  className="border-2 border-slate-300 hover:border-blue-600 text-slate-900 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl h-96 flex items-center justify-center text-white text-center">
              <div className="text-6xl font-bold">VocSkill</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">10,000+</div>
              <p className="text-slate-600 mt-2">Careers Transformed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <p className="text-slate-600 mt-2">Expert Instructors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">50+</div>
              <p className="text-slate-600 mt-2">Premium Courses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Why Choose VocSkill?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Industry-Aligned</h3>
              <p className="text-slate-600">Curriculum designed with industry leaders to ensure you learn relevant skills.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Live Learning</h3>
              <p className="text-slate-600">Interactive sessions with expert instructors. Ask questions and get real-time feedback.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Placement Support</h3>
              <p className="text-slate-600">Get placement assistance and interview preparation to land your dream job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Full Stack Development</h3>
              <p className="text-slate-600 mb-4">Learn modern web development with React, Node.js, and databases.</p>
              <Link href="/courses/full-stack-development" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Data Analytics</h3>
              <p className="text-slate-600 mb-4">Master data analysis, visualization, and business intelligence tools.</p>
              <Link href="/courses/data-analytics" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Digital Marketing</h3>
              <p className="text-slate-600 mb-4">Learn SEO, social media, content strategy, and digital campaigns.</p>
              <Link href="/courses/digital-marketing" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Generative AI</h3>
              <p className="text-slate-600 mb-4">Explore AI fundamentals, prompt engineering, and practical applications.</p>
              <Link href="/courses/generative-ai" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of professionals who are already upskilling with VocSkill.</p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
