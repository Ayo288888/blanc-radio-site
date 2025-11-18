import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const features = [
  {
    category: 'SPORTS',
    title: 'The Premier League — where football meets drama every weekend.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop',
  },
  {
    category: 'NEWS',
    title: 'Nigerian News — where today\'s headlines shape tomorrow\'s conversations.',
    image: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=300&fit=crop',
  },
  {
    category: 'ENTERTAINMENT',
    title: 'Afrobeats — the rhythm that moves the world from Nigeria.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
  },
  {
    category: 'MUSIC',
    title: 'Celebrating the power of music that power.',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop',
  },
];

const discussions = [
  { question: 'What\'s your favorite radio show and why?', participants: 4 },
  { question: 'Underrated artists we should feature.', participants: 3 },
  { question: 'How has radio changed your daily routine?', participants: 2 },
  { question: 'How has radio changed your daily routine?', participants: 1 },
  { question: 'How has radio changed your daily routine?', participants: 5 },
  { question: 'How has radio changed your daily routine?', participants: 2 },
  { question: 'How has radio changed your daily routine?', participants: 4 },
  { question: 'How has radio changed your daily routine?', participants: 1 },
];

const topListeners = [
  { name: 'Fatima', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop' },
  { name: 'Alilleman', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop' },
  { name: 'Olamide Blessing', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop' },
  { name: 'Okoro Ezeh', avatar: 'https://images.unsplash.com/photo-1507009750509-52f0528438b9?w=40&h=40&fit=crop' },
  { name: 'Mary Okpara', avatar: 'https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=40&h=40&fit=crop' },
];

const avatarImages = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop',
  'https://images.unsplash.com/photo-1507009750509-52f0528438b9?w=32&h=32&fit=crop',
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={feature.image}
                    alt={feature.category}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="inline-block bg-gray-200/30 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
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

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Discussions</h2>
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  <Plus className="w-4 h-4" />
                  <span>Create A New Post</span>
                </button>
              </div>

              <div className="space-y-4">
                {discussions.map((discussion, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-gray-800 font-medium mb-3">{discussion.question}</p>
                    <div className="flex gap-2">
                      {Array.from({ length: Math.min(discussion.participants, 4) }).map((_, i) => (
                        <img
                          key={i}
                          src={avatarImages[i % avatarImages.length]}
                          alt="User"
                          className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                      ))}
                      {discussion.participants > 4 && (
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-semibold text-gray-700 border-2 border-white shadow-sm">
                          +{discussion.participants - 4}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-100 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">FOR ADVERTISEMENT</h3>
                <p className="text-gray-700 text-sm">
                  For advertisement, send a text to the number <span className="font-semibold">08123456798</span>
                </p>
              </div>

              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">TOP LISTENER'S</h3>
                <div className="space-y-4">
                  {topListeners.map((listener, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img
                        src={listener.avatar}
                        alt={listener.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="text-gray-800 font-medium">{listener.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
