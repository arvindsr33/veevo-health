import Link from "next/link";
import Image from "next/image";
import ThankYouDetails from "@/components/ThankYouDetails";
import { generateMetaTags, generateStructuredData } from "@/lib/seo";
import { isrConfig } from "@/lib/config";

export const revalidate = 3600; // 1 hour in seconds

export const metadata = generateMetaTags({
  title: "Gracias por Unirte a Nuestra Lista de Espera | Veevo Health",
  description:
    "Tu lugar en la lista de espera de Veevo Health ha sido asegurado. Esperamos ayudarte a optimizar tu salud cardíaca y longevidad.",
  url: "https://veevo.health/es/lista-de-espera/gracias",
  lang: "es",
});

export default function ThankYouES() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateStructuredData({
              type: "WebPage",
              name: "Gracias por Unirte a Nuestra Lista de Espera",
              description:
                "Tu lugar en la lista de espera de Veevo Health ha sido asegurado. Esperamos ayudarte a optimizar tu salud cardíaca y longevidad.",
              url: "https://veevo.health/es/lista-de-espera/gracias",
            })
          ),
        }}
      />
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">¡Gracias!</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Tu lugar en nuestra lista de espera ha sido asegurado. Estamos
              emocionados de ayudarte a optimizar tu salud cardíaca y
              longevidad.
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

              <ThankYouDetails lang="es" />

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">¿Qué Sucede Después?</h3>
                <ol className="text-left text-gray-700 space-y-4 max-w-md mx-auto">
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      1
                    </span>
                    <span>
                      Revisa tu correo electrónico para un recibo de
                      confirmación y tu posición en la lista de espera.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      2
                    </span>
                    <span>
                      Te enviaremos actualizaciones regulares sobre nuestro
                      progreso y cronograma de lanzamiento.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      3
                    </span>
                    <span>
                      Cuando nuestro servicio esté listo para lanzarse,
                      recibirás acceso prioritario para reservar tu evaluación
                      de salud cardíaca.
                    </span>
                  </li>
                </ol>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Comparte con Amigos</h3>
                <p className="text-gray-700 mb-4">
                  ¿Conoces a alguien que podría estar interesado en optimizar su
                  salud cardíaca?
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                    Compartir en Facebook
                  </button>
                  <button className="bg-blue-400 text-white px-4 py-2 rounded-md">
                    Compartir en Twitter
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                    Compartir por Email
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/es"
                  className="text-teal-600 font-bold hover:underline"
                >
                  Volver a la Página Principal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Recursos para la Salud Cardíaca
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">
                  Consejos de Salud Cardíaca
                </h3>
                <p className="text-gray-700 mb-4">
                  Descubre cambios simples en el estilo de vida que pueden
                  mejorar significativamente tu salud cardíaca y longevidad.
                </p>
                <a href="#" className="text-teal-600 font-bold hover:underline">
                  Leer Más →
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Guía de Nutrición</h3>
                <p className="text-gray-700 mb-4">
                  Aprende sobre alimentos saludables para el corazón y patrones
                  dietéticos que pueden ayudar a extender tu vida.
                </p>
                <a href="#" className="text-teal-600 font-bold hover:underline">
                  Leer Más →
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">
                  Recomendaciones de Ejercicio
                </h3>
                <p className="text-gray-700 mb-4">
                  Descubre qué tipos de actividad física proporcionan los
                  mayores beneficios para la salud cardíaca.
                </p>
                <a href="#" className="text-teal-600 font-bold hover:underline">
                  Leer Más →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
