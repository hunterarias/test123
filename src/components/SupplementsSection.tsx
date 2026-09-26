
import React from 'react';
import { ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';

/**
 * Supplements promotion section
 * Cross-promotes related supplement products with featured styling
 */
const SupplementsSection: React.FC = () => {
  return (
    <section className="section-padding bg-blue-50">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">Vuoi di Più?</h2>
          <p className="text-lg mb-6 text-center">
            SCOPRI LA CLASSIFICA DIE MIGLIORI INTEGRATORI PER IL BENESSERE MASCHILE.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
            <div className="flex items-center">
              <div className="bg-white/20 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span>Facili da confrontare.</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white/20 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span>Sicuri da ordinare</span>
            </div>
          </div>
          <div className="text-center">
            <a 
              href="https://integratori.potenzamaschile.net/" 
              rel="noopener noreferrer"
              className="block md:inline-block"
            >
              <CTAButton variant="secondary" size="lg" className="w-full md:w-auto group">
                Scopri la classifica e trova il tuo integratore ideale
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </CTAButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplementsSection;
