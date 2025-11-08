import { useState } from 'react';
import { ChevronLeft, ChevronRight, Sun, Cloud, CloudRain, Wind, CloudSnow } from 'lucide-react';

const weatherData = [
  { state: 'Abia', temp: 35, condition: 'Sunny', icon: Sun },
  { state: 'Adamawa', temp: 25, condition: 'Cloudy', icon: Cloud },
  { state: 'Akwa Ibom', temp: 22, condition: 'Rainy', icon: CloudRain },
  { state: 'Anambra', temp: 19, condition: 'Windy', icon: Wind },
  { state: 'Bauchi', temp: 9, condition: 'Snowy', icon: CloudSnow },
];

export default function WeatherCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex < weatherData.length - 1) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Today's Weather</h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= weatherData.length - 1}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {weatherData.map((weather, index) => {
            const Icon = weather.icon;
            return (
              <div
                key={weather.state}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <p className="text-sm text-gray-600 mb-3">{weather.condition}</p>
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-yellow-400" />
                </div>
                <p className="text-3xl font-bold text-center mb-3">{weather.temp}°</p>
                <div className="bg-yellow-400 text-center py-2 rounded-lg">
                  <p className="font-semibold text-sm">{weather.state}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
