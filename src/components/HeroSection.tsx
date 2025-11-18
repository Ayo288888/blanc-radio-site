export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#002D72] to-[#0049A8] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex-1">
          <div className="relative">
            {/* Yellow circle accent */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full opacity-80"></div>

            <h1 className="text-5xl md:text-6xl font-bold text-blue-100 italic drop-shadow-lg relative z-10">
              Blanc Radio
            </h1>
            <p className="text-blue-200 text-lg mt-4">Unfiltered Vibes, 24/7</p>
          </div>
        </div>
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <img
                src="/heroimage.png"
                alt="Radio Host"
                className="w-64 h-64 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg mb-2">
              Listen Live            </button>
            <p className="text-white text-xl font-semibold">The Talk Show</p>
          </div>
        </div>
      </div>
    </section>
  );
}
