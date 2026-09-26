
import React from 'react';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'cta';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

/**
 * Reusable CTA button component with multiple variants and responsive design
 * 
 * Features:
 * - Mobile-first responsive design (full-width by default on mobile)
 * - Multiple variants for different use cases
 * - Optimized hover states and transitions
 * - Accessibility compliant with proper focus states
 * - Performance optimized with React.memo
 */
const CTAButton: React.FC<CTAButtonProps> = React.memo(({ 
  children, 
  onClick, 
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = true
}) => {
  const baseStyles = "font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-wellness-500 text-white hover:bg-wellness-600 shadow-md hover:shadow-lg focus:ring-wellness-500",
    secondary: "bg-white text-wellness-600 border border-wellness-500 hover:bg-wellness-50 focus:ring-wellness-500",
    cta: "bg-gradient-to-r from-wellness-500 to-wellness-700 text-white hover:from-wellness-600 hover:to-wellness-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-wellness-500"
  };
  
  const sizeStyles = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2.5 px-5 text-base",
    lg: "py-3 px-8 text-lg"
  };

  const widthStyles = fullWidth ? "w-full md:w-auto" : "w-auto";

  return (
    <button 
      type="button"
      onClick={onClick}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyles,
        className
      )}
      role="button"
      tabIndex={0}
    >
      {children}
    </button>
  );
});

// Set display name for debugging
CTAButton.displayName = 'CTAButton';

export default CTAButton;
