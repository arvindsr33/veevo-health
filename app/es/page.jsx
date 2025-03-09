import Link from "next/link";
import Image from "next/image";
import {
  generateMetaTags,
  generateStructuredData,
  generateOrganizationData,
} from "@/lib/seo";

export const metadata = generateMetaTags({
  title: "Veevo Health | Ama Tu Corazón, Vive Más",
  description:
    "Evaluaciones de salud cardíaca predictivas, personalizadas y precisas para ayudarte a vivir más tiempo.",
  url: "https://veevo.health/es",
  lang: "es",
});

export default function HomeES() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationData("es")),
        }}
      />
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Ama Tu Corazón, Vive Más
                </h1>
                <p className="text-xl mb-8">
                  Descubre el futuro de la salud cardíaca con las evaluaciones
                  impulsadas por IA de Veevo Health. Cuidado predictivo,
                  personalizado y preciso para extender tu vida.
                </p>
                <Link
                  href="/es/lista-de-espera"
                  className="bg-white text-teal-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300"
                >
                  Asegura Tu Lugar – ¡Únete a la Lista de Espera por $10!
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md h-80">
                  <Image
                    src="/images/heart-health.jpg"
                    alt="Visualización de Salud Cardíaca"
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
              ¿Por Qué Elegir Veevo Health?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-teal-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-teal-600 text-2xl font-bold">P</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Predictivo</h3>
                <p className="text-gray-600">
                  Nuestra tecnología impulsada por IA predice posibles problemas
                  cardíacos antes de que se conviertan en problemas graves.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-teal-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-teal-600 text-2xl font-bold">P</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Personalizado</h3>
                <p className="text-gray-600">
                  Evaluaciones y recomendaciones adaptadas basadas en tu perfil
                  de salud único y factores genéticos.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-teal-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-teal-600 text-2xl font-bold">P</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Preciso</h3>
                <p className="text-gray-600">
                  Tecnología de vanguardia que proporciona información precisa
                  para una salud cardíaca óptima y longevidad.
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
                    alt="Acerca de Veevo Health"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Veevo Health está dedicado a ayudar a las personas a extender
                  su vida a través de evaluaciones de salud cardíaca de
                  vanguardia. Aprovechando la tecnología médica avanzada, el
                  análisis impulsado por IA y la medicina de precisión,
                  capacitamos a las personas para tomar medidas proactivas hacia
                  la longevidad.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Nuestra misión es permitir que todos logren una salud cardíaca
                  óptima y vivan vidas más largas y saludables.
                </p>
                <Link
                  href="/es/servicios"
                  className="text-teal-600 font-bold hover:underline"
                >
                  Más información sobre nuestros servicios →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-teal-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Listo para Transformar Tu Salud Cardíaca?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Únete a nuestra lista de espera hoy y sé de los primeros en
              experimentar nuestra revolucionaria evaluación de salud cardíaca y
              plan de optimización de longevidad.
            </p>
            <Link
              href="/es/lista-de-espera"
              className="bg-white text-teal-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300"
            >
              Asegura Tu Lugar – ¡Únete a la Lista de Espera por $10!
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
