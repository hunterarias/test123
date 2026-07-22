
import { products } from "@/data/products";
import ComparisonTable from '@/components/ComparisonTable';
import WhyChooseNatural from '@/components/WhyChooseNatural';
import ProductCard from '@/components/ProductCard';

const PercheSceglierSection = () => (
  <section id="perche-scegliere-integratori-naturali-uomo" className="mb-4 scroll-mt-8">
    <h2 id="perche-integratori-naturali" className="text-3xl font-bold mb-2 text-center mt-4">Perché Scegliere Integratori Naturali</h2>
    <WhyChooseNatural />
    
    <div className="mb-8">
      <h2 id="confronto-integratori" className="text-3xl font-bold mb-2 text-center">
        Confronta e Scegli: <span className="text-theme-blue">Tauro Plus</span> vs <span className="text-theme-blue">Blue Bull</span> vs <span className="text-theme-blue">Member XXL</span>
      </h2>
      <div className="mb-8 bg-white rounded-lg shadow-lg p-6">
        <ComparisonTable products={products} />
      </div>
    </div>
  </section>
);

export default PercheSceglierSection;
