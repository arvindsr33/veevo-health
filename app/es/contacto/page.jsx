import Image from "next/image";

export const metadata = {
  title: "Contáctanos | Veevo Health",
  description:
    "Ponte en contacto con Veevo Health para preguntas sobre nuestras evaluaciones de salud cardíaca y servicios de longevidad.",
};

export default function ContactES() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre nuestras evaluaciones de salud cardíaca o
            servicios de longevidad? Estamos aquí para ayudarte. Comunícate con
            nuestro equipo hoy.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Ponte en Contacto</h2>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">Dirección</h3>
                <p className="text-lg text-gray-700">
                  601 Van Ness Ave
                  <br />
                  San Francisco, CA
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">Correo Electrónico</h3>
                <p className="text-lg text-gray-700">
                  <a
                    href="mailto:arvind@veevo.health"
                    className="text-teal-600 hover:underline"
                  >
                    arvind@veevo.health
                  </a>
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">LinkedIn</h3>
                <p className="text-lg text-gray-700">
                  <a
                    href="https://linkedin.com/in/arvind-srivastav"
                    className="text-teal-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/arvind-srivastav
                  </a>
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Tu correo electrónico"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Tu mensaje"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-teal-600 text-white px-6 py-3 rounded-md font-bold hover:bg-teal-700 transition duration-300"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Nuestra Ubicación</h2>
          <div className="relative w-full h-96 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/map-location.jpg"
              alt="Ubicación de la Oficina de Veevo Health"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
