export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-emerald-50 via-white to-blue-50">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
        <h1 className="text-4xl font-extrabold text-emerald-700 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          This page could not be found.
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
