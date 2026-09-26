
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import ClassificaProductCards from '@/components/homepage/ClassificaProductCards';
import { products } from "@/data/products";

const MiglioriIntegratoriUomoSection = () => (
  <section id="migliori-integratori-uomo" className="bg-white py-16 px-4 text-center">
    <div className="max-w-5xl mx-auto">
      <div className="mb-4">
        <Badge variant="promo" className="mb-4 bg-[#28A745] text-white font-bold" id="promozione">
          💸 MIGLIOR PREZZO -40% IMPERDIBILE
        </Badge>
      </div>
      <h1 className="mb-4">
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-theme-blue">I Migliori Integratori Naturali</span>
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-black"> per il<br />Benessere Maschile</span>
      </h1>
      <div className="space-y-2 mb-10">
        <p className="text-xl sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
          <span className="font-bold text-theme-blue">Non Sei Più Quello di Prima?</span>
          <br className="sm:hidden" />
          <span className="sm:ml-1 font-bold text-black">Ritrova Forza e Durata Quando Serve!</span>
        </p>
      </div>
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-gray-100/70 backdrop-blur-sm rounded-[22px] px-5 py-3 sm:px-6 sm:py-3.5 shadow-sm">
          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-theme-blue shrink-0" aria-hidden="true" />
          <p className="text-sm sm:text-base text-gray-700 font-medium m-0">
            Più di <span className="font-bold text-theme-blue">8.130 uomini</span> ci hanno scelto
          </p>
        </div>
      </div>
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <a 
          href="#siti-ufficiali" 
          className="bg-theme-blue text-white font-bold text-sm md:text-base px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg uppercase tracking-wide"
        >
          SOLO INTEGRATORI ORIGINALI
        </a>
        <a 
          href="#recensioni-clienti" 
          className="bg-white text-theme-blue font-bold text-sm md:text-base px-8 py-4 rounded-lg border-2 border-theme-blue hover:bg-blue-50 transition-colors uppercase tracking-wide"
        >
          RECENSIONI E OPINIONI
        </a>
      </div>
      
      
      {/* Sezione box prodotti aggiunta qui */}
      <div className="mb-12">
        <ClassificaProductCards
          products={products.slice(0, 3).map((product) => ({
            ...product,
            link:
              product.name === 'Blue Bull'
                ? 'https://www.trackflow.it/scripts/click.php?a_aid=pm&a_bid=ab9c055d&data1=gclidxyz&data2=UY0&data3=bluebull'
                : product.name === 'Tauro Plus'
                ? 'https://www.trackflow.it/scripts/click.php?a_aid=pm&a_bid=8c93cc10&data1=gclidxyz&data2=UXZ&data3=tauro-plus'
                : product.name === 'Member XXL'
                ? 'https://www.trackflow.it/scripts/click.php?a_aid=pm&a_bid=ea983a67&data1=gclidxyz&data2=k8f0mxC1&data3=memberxxl'
                : product.link,
          }))}
        />
      </div>
    </div>
  </section>
);

export default MiglioriIntegratoriUomoSection;
