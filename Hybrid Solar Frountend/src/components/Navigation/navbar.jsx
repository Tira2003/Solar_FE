import { useState } from 'react';
import { Link } from 'react-router';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import logo from '/assets/icons/logo.png';

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

          {/* Dashboard Link (Signed In) */}
          <SignedIn>
            <Link
              to="/dashboard"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-gray-800 text-sm font-medium no-underline rounded-2xl overflow-hidden group transition-all duration-300 hover:text-gray-900 bg-white/20 hover:bg-white/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600 group-hover:text-blue-500 transition-colors"
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                <path d="M18 17V9" />
                <path d="M13 17V5" />
                <path d="M8 17v-3" />
              </svg>
              <span>Dashboard</span>
            </Link>
          </SignedIn>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <SignedOut>
              <Button
                asChild
                className="hidden sm:block relative px-5 py-2 text-sm font-medium no-underline rounded-2xl overflow-hidden transition-all duration-300 bg-white/30 hover:bg-white/50 text-gray-800 hover:text-gray-900 border-none"
              >
                <Link to="/sign-in">
                  Sign In
                </Link>
              </Button>
              
              <Button
                asChild
                className="relative px-6 py-2 bg-gradient-to-r from-gray-100 to-gray-800 text-white text-sm font-medium no-underline rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 border-none"
              >
                <Link to="/sign-up">
                  Sign Up
                </Link>
              </Button>
            </SignedOut>
            
            <SignedIn>
              <div className="backdrop-blur-sm bg-white/20 rounded-full p-1 border border-white/30">
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;