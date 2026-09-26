
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onScrollToFluidPower: () => void;
}

/**
 * Hero section with main heading and CTA button
 * Includes smooth scroll functionality to product analysis
 */
const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToFluidPower }) => {
  return (
    <header className="bg-blue-gradient text-white py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="heading-xl text-white mb-4">
            Migliori Gel Naturali per il Benessere Maschile
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Confronta, Scegli e Ordina in Totale Sicurezza Direttamente dai Siti Ufficiali
          </p>
          <button 
            onClick={onScrollToFluidPower}
            className="w-full md:w-auto bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center py-3 px-8 text-lg group"
          >
            SCOPRI IL NUMERO 1
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
