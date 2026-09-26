
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  topProductLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ topProductLink }) => {
  return (
    <div className="bg-gradient-to-r from-theme-blue to-theme-darkblue text-white p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-extrabold mb-4">Pronto a Migliorare le Tue Prestazioni?</h2>
      <p className="text-xl mb-6">
        Non aspettare un altro giorno per risolvere i problemi di erezione. Agisci ora!
      </p>
      <div className="space-y-2">
        <p className="font-medium">✓ Formula naturale al 100%</p>
        <p className="font-medium">✓ Risultati visibili dalle prime assunzioni</p>
        <p className="font-medium">✓ 90 giorni di garanzia soddisfatti o rimborsati</p>
      </div>
      <a 
          href={topProductLink} 
          target="_blank" 
          rel="noopener noreferrer nofollow"
          className="flex items-center"
        >
      <Button className="w-full md:w-auto mt-6 bg-theme-green hover:bg-theme-darkgreen text-lg py-6 px-8 animate-pulse shadow-lg transition-all hover:shadow-xl hover:scale-105">
        
          ORDINA SUL SITO UFFICIALE ❯ <ArrowRight className="ml-2" />
        
      </Button>
        </a>
      <p className="mt-4 text-sm opacity-80">
        * I risultati possono variare da persona a persona. Consulta sempre un medico prima di iniziare qualsiasi supplemento.
      </p>
    </div>
  );
};

export default CTASection;
