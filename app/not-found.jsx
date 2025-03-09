import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-teal-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-teal-600 text-white px-6 py-3 rounded-md font-bold hover:bg-teal-700 transition duration-300"
          >
            Return to Home
          </Link>
          <Link
            href="/contact"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-bold hover:bg-gray-300 transition duration-300"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
