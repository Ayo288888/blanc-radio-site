import { ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    category: 'SPORTS',
    title: 'The league — where football meets drama every weekend.',
    image: '/sport.png',
  },
  {
    category: 'NEWS',
    title: 'Reality check — where today\'s headlines shape tomorrow\'s conversations.',
    image: '/news.png',
  },
  {
    category: 'ENTERTAINMENT',
    title: 'Afrobeats — the rhythm that moves the world from Nigeria.',
    image: '/enter.png',
  },
  {
    category: 'MUSIC',
    title: 'Celebrating the power of music.',
    image: '/music.png',
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Featuring</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-[16/9] relative">
                <img
                  src={feature.image}
                  alt={feature.category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block bg-gray-200/30 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                    <p className="text-xs font-semibold text-white">{feature.category}</p>
                  </div>
                  <p className="text-white text-sm leading-relaxed">{feature.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
