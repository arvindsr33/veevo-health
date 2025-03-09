export default function LoadingES() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-600"></div>
      <p className="mt-4 text-lg text-gray-600">Cargando...</p>
    </div>
  );
}
