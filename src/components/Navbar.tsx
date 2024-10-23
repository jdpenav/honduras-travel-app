import React from 'react';
import { Menu } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className={`text-2xl font-bold ${scrolled ? 'text-[#0076C0]' : 'text-white'}`}>
              Honduras Travel
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Destinations', href: '#' },
              { name: 'Activities', href: '#' },
              { name: 'Dive In', href: '/departments' },
              { name: 'About', href: '#' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  scrolled ? 'text-gray-700 hover:text-[#0076C0]' : 'text-white hover:text-gray-200'
                } transition-colors`}
              >
                {item.name}
              </a>
            ))}
            <button className="px-4 py-2 rounded-lg bg-[#0076C0] text-white hover:bg-[#005a91] transition-colors">
              Plan Your Trip
            </button>
          </div>
          
          <div className="md:hidden">
            <button className={`p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;