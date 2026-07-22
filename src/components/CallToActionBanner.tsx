
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { products } from '@/data/products';

const CallToActionBanner: React.FC = () => {
  const topProduct = [...products].sort((a, b) => b.rating - a.rating)[0];
  
  return (
    <div className="bg-theme-blue py-16 px-4 text-center text-white relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex justify-center mb-4">
          <Zap className="w-10 h-10 text-yellow-300" />
        </div>
        
        <h2 id="benessere-naturale" className="text-3xl md:text-4xl font-bold mb-6">
          Migliora il Tuo Benessere Maschile in Modo Naturale
        </h2>
        
        <div className="space-y-4 mb-8">
          <p className="text-lg md:text-xl tracking-wide leading-relaxed max-w-3xl mx-auto">
            Gli integratori naturali per il benessere maschile proposti su questo sito sono acquistabili unicamente attraverso i siti ufficiali dei produttori, una scelta che assicura il prodotto originale, la massima affidabilità nell'acquisto e una consegna rapida e discreta.
          </p>
          <p className="text-xl md:text-2xl font-bold tracking-wide leading-relaxed max-w-3xl mx-auto mb-4">
            CONSIGLI PER ACQUISTARE IN SICUREZZA
          </p>
          <p className="text-lg md:text-xl tracking-wide leading-relaxed max-w-3xl mx-auto mb-4">
            La vendita di questi tre integratori naturali per uomo avviene esclusivamente tramite siti partner affidabili, come il nostro.
          </p>
          <p className="text-lg md:text-xl tracking-wide leading-relaxed max-w-3xl mx-auto">
            Salva questa pagina tra i preferiti, così potrai procedere con l'ordine in sicurezza quando lo desideri.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <a 
            href="https://www.trackflow.it/scripts/click.php?a_aid=pm&a_bid=8c93cc10&data1=gclidxyz&data2=UXZ&data3=tauro-plus"
            rel="noopener noreferrer nofollow"
          >
            <Button 
              className="w-full md:w-auto bg-white text-theme-blue hover:bg-gray-100 px-6 py-6 text-base font-medium group animate-pulse-scale"
            >
              <span className="flex items-center">
                TAURO PLUS - ORDINA DAL SITO UFFICIALE
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </a>
        </div>
        
        <div className="flex justify-center items-center text-sm">
          <ShieldCheck className="w-5 h-5 mr-2" />
          <span>Garanzia soddisfatti o rimborsati di 30 giorni su tutti i prodotti</span>
        </div>
      </div>
    </div>
  );
};

export default CallToActionBanner;
