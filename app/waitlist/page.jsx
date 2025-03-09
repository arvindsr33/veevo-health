import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import { generateMetaTags, generateStructuredData } from "@/lib/seo";
import { isrConfig } from "@/lib/config";

export const revalidate = 3600; // 1 hour in seconds

export const metadata = generateMetaTags({
  title: "Join Our Waitlist | Veevo Health",
  description:
    "Secure your spot on the Veevo Health waitlist for $10 and be among the first to access our heart health assessment services.",
  url: "https://veevo.health/waitlist",
  lang: "en",
});

export default function Waitlist() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateStructuredData({
              type: "WebPage",
              name: "Join Our Waitlist",
              description:
                "Secure your spot on the Veevo Health waitlist for $10 and be among the first to access our heart health assessment services.",
              url: "https://veevo.health/waitlist",
            })
          ),
        }}
      />
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Waitlist
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Be among the first to experience our revolutionary heart health
              assessment and longevity optimization services.
            </p>
          </div>
        </section>

        {/* Waitlist Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Secure Your Spot – Join the Waitlist!
              </h2>
              <WaitlistForm lang="en" />
              <p className="mt-6 text-sm text-gray-600 text-center">
                By joining our waitlist, you agree to our{" "}
                <Link href="/terms" className="text-teal-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-teal-600 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">
                  What happens after I join the waitlist?
                </h3>
                <p className="text-gray-700">
                  After joining our waitlist, you'll receive a confirmation
                  email with your waitlist position. We'll keep you updated on
                  our launch timeline and you'll be among the first to be
                  notified when our services become available.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">
                  Is my $10 fee refundable?
                </h3>
                <p className="text-gray-700">
                  Your $10 waitlist fee is non-refundable, but it will be
                  applied as credit toward your future heart health assessment
                  service when it becomes available.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">
                  When will the service be available?
                </h3>
                <p className="text-gray-700">
                  We're working diligently to launch our heart health assessment
                  service in the coming months. Waitlist members will receive
                  priority access and regular updates on our progress.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">
                  How does the heart health assessment work?
                </h3>
                <p className="text-gray-700">
                  Our AI-driven heart health assessment combines advanced
                  medical technology, genetic analysis, and lifestyle factors to
                  create a comprehensive picture of your heart health and
                  provide personalized recommendations for longevity
                  optimization.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
