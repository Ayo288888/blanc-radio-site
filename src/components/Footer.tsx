import { Radio, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#002D72] to-[#0049A8] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-yellow-400 rounded-full p-2">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Blanc Radio</span>
            </div>
            <p className="text-blue-200 mb-4">Unfiltered Vibes, 24/7</p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Shows</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Host</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Schedule</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Join</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Advertise with us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Join our team</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Listeners shoutout</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400/30 pt-8 text-center">
          <p className="text-blue-200">© 2025 Blanc Radio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
