import React from 'react';

// Default arrow icon component
const DefaultIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110 drop-shadow-lg">
    <path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);

const Button = ({ 
 
  title = "Click Me", 
  subtitle, 
  onClick, 
  className = "" 
}) => {
  return (
    <div className={`flex flex-col gap-6 max-w-sm mx-auto relative z-10 ${className}`}>
      <button 
        onClick={onClick}
        className="group relative px-6 py-3 rounded-xl backdrop-blur-md border border-blue-400/40 bg-blue-500/15 shadow-lg hover:shadow-blue-500/30 hover:bg-blue-500/25 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 ease-out cursor-pointer hover:border-blue-400/60 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        <div className="relative z-10 flex items-center gap-3">
          
          <div className="text-center">
            <p className="text-blue-100 font-medium text-base group-hover:text-white transition-colors duration-300">
              {title}
            </p>
            {subtitle && (
              <p className="text-blue-200/60 text-sm group-hover:text-blue-100/80 transition-colors duration-300">
                {subtitle}
              </p>
            )}
          </div>
          <div className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-4 h-4 text-blue-200">
              <path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Button;
