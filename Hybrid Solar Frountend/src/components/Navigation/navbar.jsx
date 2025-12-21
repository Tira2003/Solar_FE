import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import logo from '/assets/icons/logo.png';


function Navbar() {
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Feature' },
    { id: 'projects', label: 'Projects' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed left-1/2 -translate-x-1/2 w-[92%] md:w-[50%] max-w-6xl z-50 transition-all duration-300 ${
        isScrolled ? 'top-2 md:top-0' : 'top-4 md:top-8'
      }`}>
        <div className="relative px-4 md:px-6 py-[6px] bg-white/10 backdrop-blur-2xl rounded-[20px] md:rounded-[28px] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[20px] md:rounded-[28px] pointer-events-none" />
          
          <div className="relative flex items-center justify-between gap-4 md:gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-10 md:h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-1 relative flex-1 justify-center">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative px-4 py-3 text-gray-800 text-sm font-medium  transition-all duration-300 group "
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

            {/* Dashboard Link (Signed In) - Desktop */}
            <SignedIn>
              <Link
                to="/dashboard"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-800 text-sm font-medium no-underline rounded-2xl overflow-hidden group transition-all duration-300 bg-gradient-to-r from-blue-100/60 to-blue-400/80hover:text-gray-900 bg-white/20 hover:bg-white/40 border border-white/20"
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

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <SignedOut>
                <Button
                  asChild
                  className="relative px-5 py-2 text-sm font-medium no-underline rounded-2xl overflow-hidden transition-all duration-300 bg-white/30 hover:bg-white/50 text-gray-800 border-1 border-white/50 hover:text-gray-900 "
                >
                  <Link to="/sign-in">
                    Sign In
                  </Link>
                </Button>
                
                <Button
                  asChild
                  className="relative px-6 py-2 bg-gradient-to-r from-blue-100/60 to-blue-400/80 text-white text-sm font-medium no-underline rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-blue-400/20 border-1 border-white/50 hover:-translate-y-0.5 "
                >
                  <Link to="/sign-up">
                    Sign Up
                  </Link>
                </Button>
              </SignedOut>
              
              <SignedIn>
                <div className="rounded-full p-0.4">
                  <UserButton  />
                </div>
              </SignedIn>
            </div>

            {/* Mobile: User Button + Hamburger */}
            <div className="flex md:hidden items-center gap-3">
              <SignedIn>
                <div className="rounded-full">
                  <UserButton />
                </div>
              </SignedIn>
              
              {/* Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/20 hover:bg-white/40 border border-white/20 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span 
                    className={`block h-0.5 bg-gray-800 rounded-full transition-all duration-300 origin-center ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                    }`}
                  />
                  <span 
                    className={`block h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                    }`}
                  />
                  <span 
                    className={`block h-0.5 bg-gray-800 rounded-full transition-all duration-300 origin-center ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-white/95 backdrop-blur-2xl z-50 md:hidden transition-transform duration-300 ease-out shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/50 to-purple-50/50 pointer-events-none" />
        
        <div className="relative h-full flex flex-col p-6 pt-20">
          {/* Close button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick}
                className="px-4 py-3 text-gray-800 text-lg font-medium rounded-xl hover:bg-blue-50 transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? 'slideIn 0.3s ease forwards' : 'none',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Dashboard Link - Mobile */}
          <SignedIn>
            <Link
              to="/dashboard"
              onClick={handleNavClick}
              className="mt-4 flex items-center gap-3 px-4 py-3 text-gray-800 text-lg font-medium rounded-xl bg-gradient-to-r from-blue-100/80 to-blue-200/80 hover:from-blue-200 hover:to-blue-300 transition-all duration-300 no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                <path d="M18 17V9" />
                <path d="M13 17V5" />
                <path d="M8 17v-3" />
              </svg>
              <span>Dashboard</span>
            </Link>
          </SignedIn>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Auth Buttons - Mobile */}
          <div className="flex flex-col gap-3 pb-8">
            <SignedOut>
              <Button
                asChild
                className="w-full px-5 py-3 text-base font-medium rounded-xl bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 transition-all duration-300"
              >
                <Link to="/sign-in" onClick={handleNavClick}>
                  Sign In
                </Link>
              </Button>
              
              <Button
                asChild
                className="w-full px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-base font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Link to="/sign-up" onClick={handleNavClick}>
                  Sign Up
                </Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;