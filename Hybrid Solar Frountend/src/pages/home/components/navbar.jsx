import { useState } from 'react';
import logo from './assests/logo.png';

function Navbar() {
  const [hoveredTab, setHoveredTab] = useState(null);

  const navItems = [
    { id: 'product', label: 'Product' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'resources', label: 'Resources' },
    { id: 'docs', label: 'Docs' },
    { id: 'pricing', label: 'Pricing' }
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[50%] max-w-5xl z-50">
      <div className="relative px-6 py-[6px] bg-white/10 backdrop-blur-2xl rounded-[28px] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[28px] pointer-events-none" />
        
        <div className="relative flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">
            <div className="relative">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1 relative flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative px-4 py-3 text-gray-800 text-sm font-medium no-underline transition-all duration-300 group"
                onMouseEnter={() => setHoveredTab(item.id)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                {/* Hover background effect */}
                <span 
                  className={`absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl transition-all duration-300 ${
                    hoveredTab === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
                
                {/* Text with subtle gradient on hover */}
                <span className="relative z-10 transition-all duration-300 group-hover:text-gray-900">
                  {item.label}
                </span>
            
                {/* Glow effect */}
                <span 
                  className={`absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-xl rounded-2xl transition-opacity duration-300 -z-10 ${
                    hoveredTab === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a 
              href="#login" 
              className="hidden sm:block relative px-5 py-3 text-gray-800 text-sm font-medium no-underline rounded-2xl overflow-hidden group transition-all duration-300 hover:text-gray-900"
            >
              <span className="absolute inset-0 bg-white/30 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/50" />
              <span className="relative z-10">Log In</span>
            </a>
            
            <a 
              href="#signup" 
              className="relative px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-medium no-underline rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:-translate-y-1"
            >
              {/* Animated gradient overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shine effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <span className="relative z-10">Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;