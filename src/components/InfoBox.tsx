
import React from 'react';
import { cn } from '@/lib/utils';

interface InfoBoxProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'blue' | 'light';
}

const InfoBox: React.FC<InfoBoxProps> = ({ 
  title, 
  children, 
  className = '',
  variant = 'default'
}) => {
  const variantStyles = {
    default: "bg-white border border-gray-200",
    blue: "bg-blue-50 border border-blue-100",
    light: "bg-blue-50 border border-blue-100"
  };

  return (
    <div className={cn(
      "rounded-xl p-6 shadow-md", 
      variantStyles[variant],
      className
    )}>
      <h3 className="text-xl font-semibold mb-4 text-wellness-700">{title}</h3>
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
};

export default InfoBox;
