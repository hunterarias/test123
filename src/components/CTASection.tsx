
import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Call-to-action section with main promotional content
 * Features inverted color button styling for emphasis
 */
const CTASection: React.FC = () => {
  return (
    <section className="section-padding bg-blue-gradient text-white">
      <div className="container-custom text-center">
        <h2 className="heading-lg text-white mb-6">
          Fidati di Potenza Maschile
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Selezioniamo solo i migliori prodotti per il benessere maschile, in collaborazione con i siti ufficiali dei produttori.
          I nostri confronti sono trasparenti, aggiornati con le recensioni reali degli utenti.
          Ordina in sicurezza.
          Ricevi dove vuoi.
        </p>
        <p className="text-lg font-bold mb-8">
          Noi confrontiamo. Tu SCEGLI.
        </p>
        <a 
          href="https://click.potenzamaschile.net/?pm=10115&TLPageName=potenzamaschile|click|V2Z|w2051&sv1=gclidxyz&sv2=pm&sv3=fluidpower_2x49&sv4=w2051&sv5=V2Z&sv6=acquisto-4&type=9" 
          rel="nofollow noopener noreferrer"
          className="block md:inline-block"
        >
          <button className="w-full md:w-auto bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center py-3 px-8 text-lg group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            PROMO MIGLIORE DI OGGI
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
