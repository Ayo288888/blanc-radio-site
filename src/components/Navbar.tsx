import { useState } from 'react';
import { Radio, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', key: 'home' },
    { label: 'Schedule', key: 'schedule' },
    { label: 'Community', key: 'community' },
    { label: 'Download', key: 'download' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => handleClick('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
            <img src="/logo2.png" alt="Blanc Radio" className="h-10 w-auto" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleClick(item.key)}
                className={`transition-colors font-medium ${currentPage === item.key ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-medium">
              Sign In
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleClick(item.key)}
                className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === item.key
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
