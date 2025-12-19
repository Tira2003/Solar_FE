import React from 'react';
import './button2.css';

/**
 * Button2 - Secondary glassmorphism button with animated blue gradient
 * A modern, reusable button component with enhanced glassmorphism and shimmer effect
 * 
 * @param {Object} props
 * @param {string} props.children - Button text/content
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.type - Button type (button, submit, reset)
 * @param {boolean} props.icon - Icon element to display
 */
const Button2 = ({ 
  children, 
  onClick, 
  className = '', 
  disabled = false,
  type = 'button',
  icon = null,
  ...rest 
}) => {
  return (
    <button
      type={type}
      className={`glass-button-2 ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <span className="glass-button-2__shimmer"></span>
      <span className="glass-button-2__content">
        {icon && <span className="glass-button-2__icon">{icon}</span>}
        {children}
      </span>
    </button>
  );
};

export default Button2;
