import { Radio } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 rounded-full p-2">
              <Radio className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Blanc Radio</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
              Home
            </a>
            <a href="#schedule" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
              Schedule
            </a>
            <a href="#community" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
              Community
            </a>
            <a href="#download" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
              Download
            </a>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-medium">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
