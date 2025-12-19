import React from 'react';
import './buttton1.css';

/**
 * Button1 - Primary glassmorphism button with blue gradient
 * A modern, reusable button component with glassmorphism effect
 * 
 * @param {Object} props
 * @param {string} props.children - Button text/content
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.type - Button type (button, submit, reset)
 */
const Button1 = ({ 
  children, 
  onClick, 
  className = '', 
  disabled = false,
  type = 'button',
  ...rest 
}) => {
  return (
    <button
      type={type}
      className={`glass-button-1 ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <span className="glass-button-1__content">{children}</span>
      <div className="glass-button-1__glow"></div>
    </button>
  );
};

export default Button1;
