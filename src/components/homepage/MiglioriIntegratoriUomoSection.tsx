
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";
import ClassificaProductCards from '@/components/homepage/ClassificaProductCards';
import { products } from "@/data/products";

const MiglioriIntegratoriUomoSection = () => (
  <section id="migliori-integratori-uomo" className="bg-white py-16 px-4 text-center">
    <div className="max-w-5xl mx-auto">
      <div className="mb-4">
        <Badge variant="promo" className="mb-4 bg-[#28A745] text-white font-bold" id="promozione">
          💸 FINO AL -40% DI SCONTO
        </Badge>
      </div>
      <h1 className="mb-4">
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-theme-blue">Tauro Plus e i Migliori Integratori</span>
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-black"> per il<br />Benessere Maschile</span>
      </h1>
      <div className="space-y-2 mb-5">
        <p className="text-xl sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
          <span className="font-bold text-theme-blue">Non Sei Più Quello di Prima?</span>
          <br className="sm:hidden" />
          <span className="sm:ml-1 font-bold text-black">Ritrova Forza e Durata Quando Serve!</span>
        </p>
      </div>

      {/* Trust box: solo integratori originali */}
      <div className="mx-auto mb-6 max-w-3xl rounded-2xl border border-green-200 bg-green-50 px-3 py-2.5 sm:px-6 sm:py-4 text-left shadow-sm">
        <div className="flex items-center gap-2.5 sm:gap-4">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-green-600 sm:h-11 sm:w-11 sm:rounded-xl">
            <ShieldCheck className="h-4 w-4 text-white sm:h-6 sm:w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="m-0 text-[17px] font-bold leading-tight text-green-800 sm:text-lg sm:text-green-700">
              Solo integratori <span className="whitespace-nowrap">100% ORIGINALI</span>
            </p>
            <p className="m-0 mt-1 text-[14px] leading-snug text-gray-900 sm:text-base sm:text-gray-700">
              Su Potenza Maschile trovi{" "}
              <span className="font-semibold">Tauro Plus, Member XXL e Blue&nbsp;Bull</span>{" "}
              originali, con accesso alle offerte dei rispettivi rivenditori.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <a 
          href="#siti-ufficiali" 
          className="bg-theme-blue text-white font-bold text-sm md:text-base px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg uppercase tracking-wide"
        >
          PREZZO TAURO PLUS
        </a>
        <a 
          href="#recensioni-clienti" 
          className="bg-white text-theme-blue font-bold text-sm md:text-base px-8 py-4 rounded-lg border-2 border-theme-blue hover:bg-blue-50 transition-colors uppercase tracking-wide"
        >
          RECENSIONI TAURO PLUS
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