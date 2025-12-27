import { useState } from 'react';
import logo from './assests/logo.png';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'product', label: 'Product' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'resources', label: 'Resources' },
    { id: 'docs', label: 'Docs' },
    { id: 'pricing', label: 'Pricing' }
  ];

  return (
    <>
      <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 w-[92%] md:w-[80%] lg:w-[60%] max-w-5xl z-50">
        <div className="relative px-4 md:px-6 py-2 md:py-[6px] bg-white/10 backdrop-blur-2xl rounded-2xl md:rounded-[28px] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl md:rounded-[28px] pointer-events-none" />
          
          <div className="relative flex items-center justify-between gap-4 md:gap-6">
            <div className="flex items-center gap-2 md:gap-3 group cursor-pointer flex-shrink-0">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-10 md:h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-1 relative flex-1 justify-center">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative px-4 py-3 text-gray-800 text-sm font-medium no-underline transition-all duration-300 group"
                  onMouseEnter={() => setHoveredTab(item.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  <span 
                    className={`absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl transition-all duration-300 ${
                      hoveredTab === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  />
                  <span className="relative z-10 transition-all duration-300 group-hover:text-gray-900">
                    {item.label}
                  </span>
                  <span 
                    className={`absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-xl rounded-2xl transition-opacity duration-300 -z-10 ${
                      hoveredTab === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <a 
                href="#login" 
                className="hidden md:block relative px-4 md:px-5 py-2 md:py-3 text-gray-800 text-sm font-medium no-underline rounded-2xl overflow-hidden group transition-all duration-300 hover:text-gray-900"
              >
                <span className="absolute inset-0 bg-white/30 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/50" />
                <span className="relative z-10">Log In</span>
              </a>
              
              <a 
                href="#signup" 
                className="relative px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-xs md:text-sm font-medium no-underline rounded-xl md:rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:-translate-y-1"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative z-10">Sign Up</span>
              </a>

              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-800 hover:bg-white/20 rounded-xl transition-colors"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-800 text-base font-medium no-underline rounded-xl hover:bg-blue-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <hr className="my-2 border-gray-200" />
              <a 
                href="#login" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-gray-800 text-base font-medium no-underline rounded-xl hover:bg-blue-50 transition-colors"
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;