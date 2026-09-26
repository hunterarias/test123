
import React from 'react';
import { cn } from '@/lib/utils';
import CTAButton from './CTAButton';
import OptimizedImage from './OptimizedImage';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const scrollToProductAnalysis = () => {
    const element = document.getElementById('product-analysis');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn("w-full py-4 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50", className)}>
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-3 text-wellness-600 text-xl font-bold">
          <OptimizedImage
            src="/lovable-uploads/eb3e2032-9d41-450c-a5cc-e394c3c35192.png"
            alt="Potenza Maschile Logo"
            className="h-8 w-auto"
            height={32}
            loading="eager"
            priority={true}
          />
          <span className="hidden md:inline">Potenza Maschile</span>
        </div>
        <div>
          <CTAButton variant="primary" size="md" onClick={scrollToProductAnalysis}>
            ACQUISTA ORA
          </CTAButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
