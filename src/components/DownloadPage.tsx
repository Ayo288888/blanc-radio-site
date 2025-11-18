import { Mic, RotateCcw, MessageSquare, Sparkles, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Mic,
    title: 'Live Radio Streaming',
    description: 'Tune In to All Your Favorite shows, 24/7, Anytime, Anywhere',
  },
  {
    icon: RotateCcw,
    title: 'Replay Past Shows',
    description: 'Catch Up On Missed Episodes And Replay Your Favorite Moments.',
  },
  {
    icon: MessageSquare,
    title: 'Real-Time Chat & Reactions',
    description: 'Join The Convo, React, And Vibe With Other Listeners Live.',
  },
  {
    icon: Sparkles,
    title: 'Personalized Experience',
    description: 'Save The Moments That Matter. Build Your Own Radio Timeline.',
  },
];

const testimonials = [
  {
    text: 'Blanc Radio is literally part of my daily routine now. The app makes it so easy to stay connected',
    author: 'queenofcruise',
    rating: 5,
  },
];

export default function DownloadPage() {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const visibleFeatures = [
    features[currentFeatureIndex % features.length],
    features[(currentFeatureIndex + 1) % features.length],
    features[(currentFeatureIndex + 2) % features.length],
    features[(currentFeatureIndex + 3) % features.length],
  ];

  const handleNext = () => {
    setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-blue-600">Take Blanc Radio</span>
                <br />
                <span className="text-blue-600">Everywhere you go</span>
              </h1>
              <p className="text-gray-700 text-lg mb-8">
                Stream your favourite shows live, catch replays and vibe nonstop
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 13.5c0-.23 0-.46-.05-.69l1.869-1.46c.168-.13.21-.36.105-.54l-1.77-3.07c-.105-.18-.315-.24-.54-.12l-2.21.88c-.46-.35-1.01-.64-1.59-.82l-.38-2.36c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.49.41l-.38 2.35c-.58.19-1.13.47-1.59.83l-2.21-.88c-.225-.09-.435-.03-.54.12l-1.77 3.07c-.105.18-.06.41.105.54L6.05 12.81c-.05.23-.05.46-.05.69s0 .46.05.69l-1.869 1.46c-.168.13-.21.36-.105.54l1.77 3.07c.105.18.315.24.54.12l2.21-.88c.46.35 1.01.64 1.59.82l.38 2.36c.04.24.24.41.48.41h3.84c.24 0 .43-.17.49-.41l.38-2.35c.58-.19 1.13-.47 1.59-.83l2.21.88c.225.09.435.03.54-.12l1.77-3.07c.105-.18.06-.41-.105-.54l-1.869-1.46c.05-.23.05-.46.05-.69zm-6.05 2.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                  </svg>
                  Download From App Store
                </button>
                <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.46 4.46c.32-.32.86-.32 1.18 0l5.32 5.32c.32.32.32.86 0 1.18l-5.32 5.32c-.32.32-.86.32-1.18 0l-5.32-5.32c-.32-.32-.32-.86 0-1.18l5.32-5.32zm0 9.08c.32-.32.86-.32 1.18 0l5.32 5.32c.32.32.32.86 0 1.18l-5.32 5.32c-.32.32-.86.32-1.18 0l-5.32-5.32c-.32-.32-.32-.86 0-1.18l5.32-5.32z" />
                  </svg>
                  Download From Google Play
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="bg-yellow-400 rounded-3xl p-6 absolute inset-x-0 -inset-y-6 -z-10"></div>
                <div className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-[9/16] flex flex-col items-center justify-center text-white p-6 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl"></div>
                    <div className="mt-8 flex flex-col items-center gap-4">
                      <div className="bg-yellow-400 rounded-full p-4">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-center">Blanc Radio</h2>
                      <p className="text-sm text-blue-100">Unfiltered Vibes. 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Feature Highlights</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {visibleFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-600 text-white p-4 rounded-full">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2">
            <button
              onClick={() => setCurrentFeatureIndex((prev) => (prev - 1 + features.length) % features.length)}
              className="w-3 h-1 bg-blue-600 rounded-full transition-all"
              aria-label="Previous features"
            ></button>
            <button
              onClick={handleNext}
              className="w-8 h-1 bg-gray-300 rounded-full transition-all hover:bg-gray-400"
              aria-label="Next features"
            ></button>
          </div>
        </section>

        <section className="py-16">
          <div className="bg-gray-50 rounded-2xl p-12 text-center max-w-2xl mx-auto">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[0].rating)].map((_, i) => (
                <span key={i} className="text-3xl text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-gray-900 text-lg mb-6 leading-relaxed">
              "{testimonials[0].text}"
            </p>
            <p className="text-gray-600 font-medium">-{testimonials[0].author}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
