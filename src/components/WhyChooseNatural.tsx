
import React from 'react';
import { Heart, Zap, Clock, Shield } from 'lucide-react';

const WhyChooseNatural = () => {
  return (
    <div className="mb-12">
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
        Gli integratori naturali contengono ingredienti di origine vegetale, scelti con attenzione per supportare il benessere quotidiano
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-[#eef3ff] rounded-full p-4 mb-4">
            <Heart className="h-8 w-8 text-[#4464E3]" />
          </div>
          <h3 id="circolazione-sanguigna" className="text-xl font-bold mb-2">Migliora la Circolazione Sanguigna</h3>
          <p className="text-gray-600">
            Ingredienti naturali selezionati noti per supportare la microcircolazione e il benessere fisico maschile.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-[#eef3ff] rounded-full p-4 mb-4">
            <Zap className="h-8 w-8 text-[#4464E3]" />
          </div>
          <h3 id="energia-maschile" className="text-xl font-bold mb-2">Supporta la Tua Energia Maschile</h3>
          <p className="text-gray-600">
            Energia necessaria nei momenti in cui conta di più. Benessere fisico generale e maggiore sicurezza.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-[#eef3ff] rounded-full p-4 mb-4">
            <Clock className="h-8 w-8 text-[#4464E3]" />
          </div>
          <h3 id="resistenza-fisica" className="text-xl font-bold mb-2">Favorisce la Resistenza</h3>
          <p className="text-gray-600">
            Favorisce equilibrio, fiducia e sicurezza nell'ambito del benessere intimo maschile.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center">
          <div className="bg-[#eef3ff] rounded-full p-4 mb-4">
            <Shield className="h-8 w-8 text-[#4464E3]" />
          </div>
          <h3 id="naturale-sicuro" className="text-xl font-bold mb-2">100% Naturale e Sicuro</h3>
          <p className="text-gray-600">
            Formulazioni basate su ingredienti naturali, senza effetti collaterali dannosi a differenza dei farmaci chimici.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseNatural;
