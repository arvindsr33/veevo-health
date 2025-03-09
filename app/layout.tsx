import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veevo Health | Love Your Heart, Live Longer",
  description:
    "Predictive, personalized, and precise heart health assessments to help you live longer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AnalyticsWrapper>
          <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
              <div className="flex items-center">
                <Link href="/">
                  <div className="flex items-center">
                    <img
                      src="/images/veevo-logo.svg"
                      alt="Veevo Health Logo"
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
                      href="/"
                      className="text-gray-700 hover:text-teal-600"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-700 hover:text-teal-600"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-700 hover:text-teal-600"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/waitlist"
                      className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition duration-300"
                    >
                      Join Waitlist
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Veevo Health</h3>
                  <p>
                    Dedicated to helping people extend their lifespan through
                    cutting-edge heart health assessments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact</h3>
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
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                <p>
                  &copy; {new Date().getFullYear()} Veevo Health. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </AnalyticsWrapper>
      </body>
    </html>
  );
}
