import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Dropdown = ({ 
  trigger, 
  children, 
  className = '',
  align = 'left',
  width = 'w-56'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const alignmentClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2'
  };

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      {/* Trigger */}
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div 
            className="fixed inset-0 z-10 md:hidden" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div 
            className={`
              absolute z-20 mt-2 ${width} ${alignmentClasses[align]}
              bg-white rounded-xl shadow-lg border border-gray-200
              overflow-hidden
              animate-in fade-in slide-in-from-top-2 duration-200
            `}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
};

// Dropdown Item Component
export const DropdownItem = ({ 
  children, 
  onClick, 
  icon: Icon,
  variant = 'default',
  disabled = false 
}) => {
  const variantClasses = {
    default: 'text-gray-700 hover:bg-blue-50 hover:text-blue-700',
    danger: 'text-red-600 hover:bg-red-50',
    success: 'text-green-600 hover:bg-green-50'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full px-4 py-3 text-left text-sm font-medium
        flex items-center gap-3
        transition-colors duration-150
        ${disabled ? 'opacity-50 cursor-not-allowed' : variantClasses[variant]}
        ${disabled ? '' : 'active:scale-[0.98]'}
      `}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
};

// Dropdown Divider Component
export const DropdownDivider = () => (
  <div className="my-1 border-t border-gray-200" />
);

// Dropdown Header Component
export const DropdownHeader = ({ children }) => (
  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">
    {children}
  </div>
);

// Default Dropdown Button Trigger
export const DropdownButton = ({ 
  children, 
  variant = 'primary',
  size = 'md' 
}) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300',
    ghost: 'hover:bg-gray-100 text-gray-700'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <button 
      className={`
        ${variants[variant]} ${sizes[size]}
        rounded-lg font-medium
        flex items-center gap-2
        transition-all duration-200
        shadow-sm hover:shadow-md
      `}
    >
      {children}
      <ChevronDown className="w-4 h-4" />
    </button>
  );
};

export default Dropdown;
