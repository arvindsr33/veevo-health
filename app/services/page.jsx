import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Heart Health Services | Veevo Health",
  description:
    "AI-driven Predictive, Personalized, and Precise Heart Health Assessment and Longevity Optimization Plans",
};

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Heart Health Assessment
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our comprehensive AI-driven heart health assessment provides
            predictive, personalized, and precise insights to optimize your
            longevity.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative w-full max-w-md h-80 mx-auto">
                <Image
                  src="/images/ai-assessment.jpg"
                  alt="AI-driven Heart Assessment"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">AI-Driven Assessment</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our proprietary AI technology analyzes multiple data points from
                your health history, genetic factors, lifestyle choices, and
                current health metrics to create a comprehensive picture of your
                heart health.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This advanced analysis allows us to identify potential risks
                years before traditional methods, giving you the opportunity to
                take preventive action.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center mb-16">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative w-full max-w-md h-80 mx-auto">
                <Image
                  src="/images/personalized-plan.jpg"
                  alt="Personalized Longevity Plan"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pr-12">
              <h2 className="text-3xl font-bold mb-6">
                Personalized Longevity Plan
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Based on your assessment results, we create a tailored longevity
                optimization plan designed specifically for your unique health
                profile and goals.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Your plan includes detailed recommendations for nutrition,
                exercise, lifestyle modifications, and preventive measures to
                maximize your heart health and extend your lifespan.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative w-full max-w-md h-80 mx-auto">
                <Image
                  src="/images/ongoing-monitoring.jpg"
                  alt="Ongoing Monitoring"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">
                Ongoing Monitoring & Support
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Your journey to optimal heart health doesn't end with the
                assessment. We provide continuous monitoring and support to
                track your progress and adjust your plan as needed.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Regular check-ins, progress updates, and plan refinements ensure
                you stay on the path to improved heart health and longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/Waitlist */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Waitlist</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our comprehensive heart health assessment service is coming soon.
            Secure your spot on our waitlist today for just $10 and be among the
            first to experience this revolutionary approach to heart health and
            longevity.
          </p>
          <Link
            href="/waitlist"
            className="bg-teal-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-teal-700 transition duration-300"
          >
            Secure Your Spot – Join the Waitlist for $10!
          </Link>
        </div>
      </section>
    </div>
  );
}
