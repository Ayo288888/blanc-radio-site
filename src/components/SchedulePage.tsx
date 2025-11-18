import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const daysOfWeek = ['Today', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];

const schedules: Record<string, Array<{ title: string; time: string; description: string; image: string }>> = {
  Today: [
    {
      title: 'Morning Vibes',
      time: '7:00AM-9:00AM',
      description: 'Energize your day with Afrobeats, light talk, and positive energy hosted by Toni.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
    },
    {
      title: 'Urban Drive',
      time: '9:00AM-11:00AM',
      description: 'CJ & Lola talk pop culture, trending gist, and throw it hot Hip-Hop/R&B mixes.',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop',
    },
    {
      title: 'Midday Recharge',
      time: '12:00PM-2:00PM',
      description: 'Smooth soul, juju sounds & inspirational talk to keep your afternoon flowing.',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200&h=200&fit=crop',
    },
  ],
  Saturday: [
    {
      title: 'Weekend Wakeup',
      time: '8:00AM-10:00AM',
      description: 'Lazy Saturday tunes and brunch beats to start your weekend.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    },
    {
      title: 'Afro House Hour',
      time: '10:00AM-12:00PM',
      description: 'High-energy sets to keep your Saturday moving.',
      image: 'https://images.unsplash.com/photo-1516280440614-37939635добавить?w=200&h=200&fit=crop',
    },
    {
      title: 'Sports Roundup',
      time: '2:00PM-4:00PM',
      description: 'Weekend sports highlights and analysis.',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop',
    },
  ],
  Sunday: [
    {
      title: 'Soulful Sunday',
      time: '9:00AM-11:00AM',
      description: 'Chill vibes and mellow tracks for a slow Sunday.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
    },
    {
      title: 'The Brunch Mix',
      time: '11:00AM-1:00PM',
      description: 'Curated mixes for your Sunday brunch.',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop',
    },
  ],
  Monday: [
    {
      title: 'Motivation Morning',
      time: '7:00AM-9:00AM',
      description: 'Start your week right with uplifting tunes and conversation.',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200&h=200&fit=crop',
    },
    {
      title: 'Workday Drive',
      time: '5:00PM-7:00PM',
      description: 'Commuter mixes and quick news bites to keep you company.',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=200&h=200&fit=crop',
    },
  ],
  Tuesday: [
    {
      title: 'Tech Tuesday',
      time: '6:00PM-7:00PM',
      description: 'Weekly tech roundups and interviews with innovators.',
      image: 'https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_960_720.jpg',
    },
    {
      title: 'Indie Evenings',
      time: '8:00PM-10:00PM',
      description: 'Spotlight on emerging indie artists.',
      image: 'https://cdn.pixabay.com/photo/2014/11/26/18/05/singer-546623_960_720.jpg',
    },
  ],
  Wednesday: [
    {
      title: 'Midweek Mix',
      time: '7:00PM-9:00PM',
      description: 'A mix to power you through hump day.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    },
  ],
  Thursday: [
    {
      title: 'Throwback Thursday',
      time: '8:00PM-10:00PM',
      description: 'Classic bangers and listener requests all night long.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    },
  ],
};

const reactions = [
  {
    user: 'RadioGeek001',
    time: '2hr ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop',
    comment: 'The Underground just introduced Me To 3 New Faces. Blanc Radio Is Elite Fr.',
  },
  {
    user: 'Slimjosh_x',
    time: '2hr ago',
    avatar: 'https://cdn.pixabay.com/photo/2014/11/26/18/05/singer-546623_960_720.jpg',
    comment: 'Pillow Talk Was Too Real Last Night 🥺 Who Writes These Lore Letters??',
  },
  {
    user: 'Radiobae_ng',
    time: '2hr ago',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop',
    comment: 'Morning Vibes Got Me Dancing At 7 AM. Don\'t Sleep On It.',
  },
  {
    user: 'Ayechantelie',
    time: '1hr ago',
    avatar: 'https://cdn.pixabay.com/photo/2022/12/24/21/14/portrait-7676482_1280.jpg',
    comment: 'Pillow Talk Last Night? Too Deep 😭 I Was Lowkey Emotional 😭❤️',
  },
  {
    user: 'Nene4theculture',
    time: '3m ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop',
    comment: 'Whoever Runs The Plug Is Plugged In For Real. Music, Fashion, Tech—A1',
  },
  {
    user: 'Official_johnwave',
    time: '30m ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop',
    comment: 'Midday Recharge Is Literally My Productivity Boost. I Don\'t Miss It',
  },
];

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState('Today');
  const items = schedules[selectedDay] ?? schedules['Today'];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-yellow-400 rounded-2xl p-8 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">
            What's On Air <span className="text-blue-600">Today?</span>
          </h1>
          <p className="text-gray-800 text-lg">Explore shows across all days. Set your reminders.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{selectedDay}</h2>

          <div className="mb-8">
            <div className="md:flex md:items-start md:gap-6">
              <div className="md:w-40 lg:w-48 flex gap-2 md:flex-col overflow-x-auto md:overflow-visible mb-4 md:mb-0">
                {daysOfWeek.map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap md:w-full text-left ${
                      selectedDay === day
                        ? 'bg-blue-600 text-white'
                        : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-600'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="flex-1">
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">{item.time}</p>
                        <p className="text-gray-700 text-sm mt-2">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">See What Listeners Are Saying</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {reactions.map((reaction, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <img
                    src={reaction.avatar}
                    alt={reaction.user}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900">{reaction.user}</p>
                    <p className="text-xs text-gray-500">{reaction.time}</p>
                  </div>
                </div>
                <p className="text-gray-800 text-sm leading-relaxed">{reaction.comment}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
              View More Reactions
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
