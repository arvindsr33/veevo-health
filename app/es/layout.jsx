import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Veevo Health | Ama Tu Corazón, Vive Más",
  description:
    "Evaluaciones de salud cardíaca predictivas, personalizadas y precisas para ayudarte a vivir más tiempo.",
};

export default function SpanishLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AnalyticsWrapper>
          <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
              <div className="flex items-center">
                <Link href="/es">
                  <div className="flex items-center">
                    <img
                      src="/images/veevo-logo.svg"
                      alt="Logo de Veevo Health"
                      className="h-10 mr-3"
                    />
                    <span className="text-2xl font-bold text-teal-600">
                      Veevo Health
                    </span>
                  </div>
                </Link>
              </div>
              <nav>
                <ul className="flex space-x-6 items-center">
                  <li>
                    <Link
                      href="/es"
                      className="text-gray-700 hover:text-teal-600"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/es/servicios"
                      className="text-gray-700 hover:text-teal-600"
                    >
                      Servicios
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/es/contacto"
                      className="text-gray-700 hover:text-teal-600"
                    >
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/es/lista-de-espera"
                      className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition duration-300"
                    >
                      Unirse a la Lista
                    </Link>
                  </li>
                  <li>
                    <LanguageSwitcher />
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Veevo Health</h3>
                  <p>
                    Dedicados a ayudar a las personas a extender su vida a
                    través de evaluaciones de salud cardíaca de vanguardia.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Contacto</h3>
                  <p>601 Van Ness Ave</p>
                  <p>San Francisco, CA</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:arvind@veevo.health"
                      className="text-teal-300"
                    >
                      arvind@veevo.health
                    </a>
                  </p>
                  <p>
                    LinkedIn:{" "}
                    <a
                      href="https://linkedin.com/in/arvind-srivastav"
                      className="text-teal-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Arvind Srivastav
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Idiomas</h3>
                  <ul>
                    <li>
                      <Link href="/" className="text-teal-300 hover:underline">
                        English
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/es"
                        className="text-teal-300 hover:underline"
                      >
                        Español
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                <p>
                  &copy; {new Date().getFullYear()} Veevo Health. Todos los
                  derechos reservados.
                </p>
              </div>
            </div>
          </footer>
        </AnalyticsWrapper>
      </body>
    </html>
  );
}
