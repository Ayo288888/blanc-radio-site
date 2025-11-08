import { useState } from 'react';

export default function AdPollSection() {
  const [selectedArtist, setSelectedArtist] = useState('');

  const handleVote = () => {
    if (selectedArtist) {
      alert(`You voted for ${selectedArtist}!`);
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-2xl p-12 text-center shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FOR ADVERTISEMENT</h2>
            <p className="text-gray-700">For advertisement, fill out the form or send a text to the number</p>
            <p className="text-xl font-bold text-blue-600 mt-2">08123456798</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Today's Poll</h2>
            <p className="text-lg text-gray-700 mb-6">Who is Nigeria's number 1 artist?</p>

            <div className="space-y-4">
              <label className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-400 cursor-pointer transition-colors">
                <input
                  type="radio"
                  name="artist"
                  value="Davido"
                  checked={selectedArtist === 'Davido'}
                  onChange={(e) => setSelectedArtist(e.target.value)}
                  className="w-5 h-5 text-blue-600"
                />
                <span className="text-lg font-medium">Davido</span>
              </label>

              <label className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-400 cursor-pointer transition-colors">
                <input
                  type="radio"
                  name="artist"
                  value="Wizkid"
                  checked={selectedArtist === 'Wizkid'}
                  onChange={(e) => setSelectedArtist(e.target.value)}
                  className="w-5 h-5 text-blue-600"
                />
                <span className="text-lg font-medium">Wizkid</span>
              </label>

              <label className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-400 cursor-pointer transition-colors">
                <input
                  type="radio"
                  name="artist"
                  value="Burna Boy"
                  checked={selectedArtist === 'Burna Boy'}
                  onChange={(e) => setSelectedArtist(e.target.value)}
                  className="w-5 h-5 text-blue-600"
                />
                <span className="text-lg font-medium">Burna Boy</span>
              </label>
            </div>

            <button
              onClick={handleVote}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Submit Vote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
