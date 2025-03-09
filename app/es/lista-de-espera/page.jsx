import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import { generateMetaTags, generateStructuredData } from "@/lib/seo";
import { isrConfig } from "@/lib/config";

export const revalidate = isrConfig.revalidate;

export const metadata = generateMetaTags({
  title: "Únete a Nuestra Lista de Espera | Veevo Health",
  description:
    "Asegura tu lugar en la lista de espera de Veevo Health por $10 y sé de los primeros en acceder a nuestros servicios de evaluación de salud cardíaca.",
  url: "https://veevo.health/es/lista-de-espera",
  lang: "es",
});

export default function WaitlistES() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateStructuredData({
              type: "WebPage",
              name: "Únete a Nuestra Lista de Espera",
              description:
                "Asegura tu lugar en la lista de espera de Veevo Health por $10 y sé de los primeros en acceder a nuestros servicios de evaluación de salud cardíaca.",
              url: "https://veevo.health/es/lista-de-espera",
            })
          ),
        }}
      />
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Únete a Nuestra Lista de Espera
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Sé de los primeros en experimentar nuestra revolucionaria
              evaluación de salud cardíaca y servicios de optimización de
              longevidad.
            </p>
          </div>
        </section>

        {/* Waitlist Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Asegura Tu Lugar – ¡Únete a la Lista de Espera por $10!
              </h2>
              <WaitlistForm lang="es" />
              <p className="mt-6 text-sm text-gray-600 text-center">
                Al unirte a nuestra lista de espera, aceptas nuestros{" "}
                <Link
                  href="/es/terminos"
                  className="text-teal-600 hover:underline"
                >
                  Términos de Servicio
                </Link>{" "}
                y{" "}
                <Link
                  href="/es/privacidad"
                  className="text-teal-600 hover:underline"
                >
                  Política de Privacidad
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
              Preguntas Frecuentes
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">
                  ¿Qué sucede después de unirme a la lista de espera?
                </h3>
                <p className="text-gray-700">
                  Después de unirte a nuestra lista de espera, recibirás un
                  correo electrónico de confirmación con tu posición en la
                  lista. Te mantendremos informado sobre nuestro cronograma de
                  lanzamiento y serás de los primeros en ser notificado cuando
                  nuestros servicios estén disponibles.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">
                  ¿Mi tarifa de $10 es reembolsable?
                </h3>
                <p className="text-gray-700">
                  Tu tarifa de lista de espera de $10 no es reembolsable, pero
                  se aplicará como crédito para tu futura evaluación de salud
                  cardíaca cuando esté disponible.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">
                  ¿Cuándo estará disponible el servicio?
                </h3>
                <p className="text-gray-700">
                  Estamos trabajando diligentemente para lanzar nuestro servicio
                  de evaluación de salud cardíaca en los próximos meses. Los
                  miembros de la lista de espera recibirán acceso prioritario y
                  actualizaciones regulares sobre nuestro progreso.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">
                  ¿Cómo funciona la evaluación de salud cardíaca?
                </h3>
                <p className="text-gray-700">
                  Nuestra evaluación de salud cardíaca impulsada por IA combina
                  tecnología médica avanzada, análisis genético y factores de
                  estilo de vida para crear una imagen completa de tu salud
                  cardíaca y proporcionar recomendaciones personalizadas para la
                  optimización de la longevidad.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
