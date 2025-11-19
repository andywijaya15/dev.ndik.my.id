export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6 relative overflow-hidden">
      {/* Glow Sci-Fi */}
      <div className="absolute w-[700px] h-[700px] bg-indigo-600/20 blur-[200px] rounded-full"></div>

      <div className="max-w-3xl text-center space-y-6 relative z-10">
        <h1 className="text-6xl font-bold tracking-widest text-indigo-400">Andy Wijaya</h1>

        <p className="text-gray-400 text-lg">Futuristic interface builder with Three.js + React.</p>

        <button className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-semibold shadow-xl shadow-indigo-500/40 transition">
          Explore Now
        </button>
      </div>
    </section>
  );
}
