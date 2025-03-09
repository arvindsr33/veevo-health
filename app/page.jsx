import Link from "next/link";
import Image from "next/image";
import {
  generateMetaTags,
  generateStructuredData,
  generateOrganizationData,
} from "@/lib/seo";

export const metadata = generateMetaTags({
  title: "Veevo Health | Love Your Heart, Live Longer",
  description:
    "Predictive, personalized, and precise heart health assessments to help you live longer.",
  url: "https://veevo.health",
  lang: "en",
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationData("en")),
        }}
      />
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Love Your Heart, Live Longer
                </h1>
                <p className="text-xl mb-8">
                  Discover the future of heart health with Veevo Health's
                  AI-driven assessments. Predictive, personalized, and precise
                  care to extend your lifespan.
                </p>
                <Link
                  href="/waitlist"
                  className="bg-white text-teal-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300"
                >
                  Secure Your Spot – Join the Waitlist for $10!
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md h-80">
                  <Image
                    src="/images/heart-health.jpg"
                    alt="Heart Health Visualization"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Veevo Health?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-teal-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-teal-600 text-2xl font-bold">P</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Predictive</h3>
                <p className="text-gray-600">
                  Our AI-powered technology predicts potential heart issues
                  before they become serious problems.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-teal-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-teal-600 text-2xl font-bold">P</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized</h3>
                <p className="text-gray-600">
                  Tailored assessments and recommendations based on your unique
                  health profile and genetic factors.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-teal-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-teal-600 text-2xl font-bold">P</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Precise</h3>
                <p className="text-gray-600">
                  Cutting-edge technology delivers accurate insights for optimal
                  heart health and longevity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <div className="relative w-full max-w-md h-80 mx-auto">
                  <Image
                    src="/images/about-veevo.jpg"
                    alt="About Veevo Health"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Veevo Health is dedicated to helping people extend their
                  lifespan through cutting-edge heart health assessments. By
                  leveraging advanced medical technology, AI-driven analytics,
                  and precision medicine, we empower individuals to take
                  proactive steps toward longevity.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our mission is to enable everyone to achieve optimal heart
                  health and live longer, healthier lives.
                </p>
                <Link
                  href="/services"
                  className="text-teal-600 font-bold hover:underline"
                >
                  Learn more about our services →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-teal-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Heart Health?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our waitlist today and be among the first to experience our
              revolutionary heart health assessment and longevity optimization
              plan.
            </p>
            <Link
              href="/waitlist"
              className="bg-white text-teal-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300"
            >
              Secure Your Spot – Join the Waitlist for $10!
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
