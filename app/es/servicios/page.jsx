import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Servicios de Salud Cardíaca | Veevo Health",
  description:
    "Evaluación de Salud Cardíaca Predictiva, Personalizada y Precisa impulsada por IA y Planes de Optimización de Longevidad",
};

export default function ServicesES() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Evaluación de Salud Cardíaca
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nuestra evaluación integral de salud cardíaca impulsada por IA
            proporciona información predictiva, personalizada y precisa para
            optimizar tu longevidad.
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
                  alt="Evaluación Impulsada por IA"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">
                Evaluación Impulsada por IA
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Nuestra tecnología de IA patentada analiza múltiples puntos de
                datos de tu historial de salud, factores genéticos, elecciones
                de estilo de vida y métricas de salud actuales para crear una
                imagen completa de tu salud cardíaca.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Este análisis avanzado nos permite identificar riesgos
                potenciales años antes que los métodos tradicionales, dándote la
                oportunidad de tomar medidas preventivas.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center mb-16">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative w-full max-w-md h-80 mx-auto">
                <Image
                  src="/images/personalized-plan.jpg"
                  alt="Plan de Longevidad Personalizado"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pr-12">
              <h2 className="text-3xl font-bold mb-6">
                Plan de Longevidad Personalizado
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Basado en los resultados de tu evaluación, creamos un plan de
                optimización de longevidad adaptado específicamente para tu
                perfil de salud único y tus objetivos.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Tu plan incluye recomendaciones detalladas para nutrición,
                ejercicio, modificaciones de estilo de vida y medidas
                preventivas para maximizar tu salud cardíaca y extender tu vida.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative w-full max-w-md h-80 mx-auto">
                <Image
                  src="/images/ongoing-monitoring.jpg"
                  alt="Monitoreo Continuo"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">
                Monitoreo y Soporte Continuo
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Tu viaje hacia una salud cardíaca óptima no termina con la
                evaluación. Proporcionamos monitoreo y soporte continuos para
                seguir tu progreso y ajustar tu plan según sea necesario.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Chequeos regulares, actualizaciones de progreso y refinamientos
                del plan aseguran que te mantengas en el camino hacia una mejor
                salud cardíaca y longevidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/Waitlist */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Únete a Nuestra Lista de Espera
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestro servicio integral de evaluación de salud cardíaca estará
            disponible próximamente. Asegura tu lugar en nuestra lista de espera
            hoy por solo $10 y sé de los primeros en experimentar este enfoque
            revolucionario para la salud cardíaca y la longevidad.
          </p>
          <Link
            href="/es/lista-de-espera"
            className="bg-teal-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-teal-700 transition duration-300"
          >
            Asegura Tu Lugar – ¡Únete a la Lista de Espera por $10!
          </Link>
        </div>
      </section>
    </div>
  );
}
