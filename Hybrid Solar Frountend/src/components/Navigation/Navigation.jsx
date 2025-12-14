import { Link } from "react-router";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-4 mt-4">
      <div className="max-w-7xl mx-auto backdrop-blur-xl bg-gradient-to-r from-blue-500/10 via-white/10 to-blue-400/10 border border-white/20 rounded-2xl shadow-xl px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex justify-center items-center shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-wind"
              >
                <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
                <path d="M17.5 8a2.5 2.5 1 1 2 4H2" />
                <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
              </svg>
            </div>
            <span className="font-semibold text-xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Aelora
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <SignedIn>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 group"
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
                <span className="font-medium text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                  Dashboard
                </span>
              </Link>
            </SignedIn>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <SignedOut>
                <Button
                  asChild
                  className="backdrop-blur-sm bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-none shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  <Link to="/sign-in" className="px-6 py-2">
                    Sign In
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="backdrop-blur-sm bg-white/20 hover:bg-white/30 border border-white/40 text-gray-700 hover:text-gray-900 transition-all duration-300"
                >
                  <Link to="/sign-up" className="px-6 py-2">
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
      </div>
    </nav>
  );
};

export default Navigation;
