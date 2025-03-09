import Link from "next/link";
import Image from "next/image";
import ThankYouDetails from "@/components/ThankYouDetails";
import { generateMetaTags, generateStructuredData } from "@/lib/seo";
import { isrConfig } from "@/lib/config";

export const revalidate = isrConfig.revalidate;

export const metadata = generateMetaTags({
  title: "Thank You for Joining Our Waitlist | Veevo Health",
  description:
    "Your spot on the Veevo Health waitlist has been secured. We look forward to helping you optimize your heart health and longevity.",
  url: "https://veevo.health/waitlist/thank-you",
  lang: "en",
});

export default function ThankYou() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateStructuredData({
              type: "WebPage",
              name: "Thank You for Joining Our Waitlist",
              description:
                "Your spot on the Veevo Health waitlist has been secured. We look forward to helping you optimize your heart health and longevity.",
              url: "https://veevo.health/waitlist/thank-you",
            })
          ),
        }}
      />
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thank You!</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Your spot on our waitlist has been secured. We're excited to help
              you optimize your heart health and longevity.
            </p>
          </div>
        </section>

        {/* Confirmation Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <ThankYouDetails lang="en" />

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                <ol className="text-left text-gray-700 space-y-4 max-w-md mx-auto">
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      1
                    </span>
                    <span>
                      Check your email for a confirmation receipt and your
                      waitlist position.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      2
                    </span>
                    <span>
                      We'll send you regular updates about our progress and
                      launch timeline.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      3
                    </span>
                    <span>
                      When our service is ready to launch, you'll receive
                      priority access to book your heart health assessment.
                    </span>
                  </li>
                </ol>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Share with Friends</h3>
                <p className="text-gray-700 mb-4">
                  Know someone who might be interested in optimizing their heart
                  health?
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                    Share on Facebook
                  </button>
                  <button className="bg-blue-400 text-white px-4 py-2 rounded-md">
                    Share on Twitter
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                    Share via Email
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/"
                  className="text-teal-600 font-bold hover:underline"
                >
                  Return to Home Page
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Heart Health Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Heart Health Tips</h3>
                <p className="text-gray-700 mb-4">
                  Discover simple lifestyle changes that can significantly
                  improve your heart health and longevity.
                </p>
                <a href="#" className="text-teal-600 font-bold hover:underline">
                  Read More →
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Nutrition Guide</h3>
                <p className="text-gray-700 mb-4">
                  Learn about heart-healthy foods and dietary patterns that can
                  help extend your lifespan.
                </p>
                <a href="#" className="text-teal-600 font-bold hover:underline">
                  Read More →
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">
                  Exercise Recommendations
                </h3>
                <p className="text-gray-700 mb-4">
                  Find out which types of physical activity provide the greatest
                  benefits for heart health.
                </p>
                <a href="#" className="text-teal-600 font-bold hover:underline">
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
