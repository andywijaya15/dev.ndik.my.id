export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-gray-100 flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Text */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg text-gray-600 mb-6">Ini adalah hero section dengan foto dari URL.</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">Get Started</button>
        </div>

        {/* Foto dari URL */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="Hero"
            className="rounded-2xl shadow-xl w-80 h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
