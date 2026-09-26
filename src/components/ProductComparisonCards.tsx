import React from 'react';
import { Star, Banknote, ShieldCheck, Truck, ChevronRight, CheckCircle2, Zap, UserCheck, Activity, Hourglass } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: string;
  link: string;
}

interface ProductComparisonCardsProps {
  products: Product[];
}

type ProductMeta = {
  ribbon: string;
  tagline: string;
  discountLabel: React.ReactNode;
  price: React.ReactNode;
  priceSuffix?: string;
  oldPrice: string;
  ctaText: string;
  isTopChoice?: boolean;
};

const ProductComparisonCards: React.FC<ProductComparisonCardsProps> = ({ products }) => {
  const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);

  const getMeta = (name: string): ProductMeta => {
    if (name === 'Tauro Plus') {
      return {
        ribbon: 'FORMULA COMPLETA',
        tagline: 'Ritrova Te Stesso Naturalmente!',
        discountLabel: (
          <>
            <div className="text-sm sm:text-base font-bold text-theme-blue leading-tight">Oggi</div>
            <div className="text-2xl sm:text-3xl font-extrabold leading-none mt-0.5" style={{ color: '#FF3D00' }}>-40%</div>
            <div className="text-[11px] sm:text-xs font-bold text-theme-blue mt-0.5">di SCONTO</div>
          </>
        ),
        price: <span className="text-2xl sm:text-3xl font-extrabold text-theme-green">€49</span>,
        oldPrice: '€82',
        ctaText: 'ORDINA TAURO PLUS ORIGINALE',
        isTopChoice: true,
      };
    }
    if (name === 'Member XXL') {
      return {
        ribbon: 'FORMULA BILANCIATA',
        tagline: 'Più Presenza e Controllo',
        discountLabel: (
          <>
            <div className="text-sm sm:text-base font-bold text-theme-blue leading-tight">Oggi</div>
            <div className="text-sm sm:text-base font-bold mt-0.5" style={{ color: '#FF3D00' }}>3 al prezzo di 2</div>
          </>
        ),
        price: <span className="text-2xl sm:text-3xl font-extrabold text-theme-green">€35,32</span>,
        priceSuffix: 'a confezione',
        oldPrice: '€52,98',
        ctaText: 'ORDINA MEMBER XXL ORIGINALE',
      };
    }
    return {
      ribbon: 'FORMULA AVANZATA',
      tagline: 'Il Benessere Maschile che Cerchi',
      discountLabel: (
        <>
          <div className="text-sm sm:text-base font-bold text-theme-blue leading-tight">Oggi</div>
          <div className="text-sm sm:text-base font-bold mt-0.5" style={{ color: '#FF3D00' }}>2 al prezzo di 1</div>
        </>
      ),
      price: <span className="text-xl sm:text-2xl font-extrabold text-theme-green">2X€59,99</span>,
      priceSuffix: 'a confezione',
      oldPrice: '€119,98',
      ctaText: 'ORDINA BLUE BULL ORIGINALE',
    };
  };

  const renderStars = () => (
    <div className="flex justify-center gap-0.5 my-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );

  return (
    <div className="w-full">
      <h2 id="siti-ufficiali" className="text-2xl md:text-3xl font-bold text-center mb-6 text-theme-blue px-2">
        Benessere Energia Equilibrio <span className="text-gray-900">Ogni Giorno</span> - Ordina dai Siti Ufficiali
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {sortedProducts.map((product) => {
          const meta = getMeta(product.name);
          return (
            <div
              key={product.id}
              className={`relative rounded-xl bg-white overflow-hidden flex flex-col ${
                meta.isTopChoice ? 'border-2 border-theme-blue shadow-lg' : 'border border-gray-200 shadow-sm'
              } hover:shadow-xl transition-shadow`}
            >
              {/* Ribbon */}
              <div className="absolute top-0 left-0 z-10">
                <div className="bg-theme-blue text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 pr-5 leading-tight"
                     style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}>
                  {meta.ribbon.split(' ').map((w, i) => (
                    <div key={i}>{w}</div>
                  ))}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-1">
                {/* Image */}
                <div className="flex justify-center mb-2 mt-2">
                  <img
                    src={product.image}
                    alt={`${product.name} - integratore naturale per benessere maschile`}
                    width="140"
                    height="140"
                    loading="lazy"
                    className="h-28 sm:h-32 object-contain"
                  />
                </div>

                {/* Name + tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900">{product.name}</h3>
                <p className="text-center text-sm sm:text-base text-theme-blue font-semibold mt-1">{meta.tagline}</p>

                {renderStars()}

                {/* Price box */}
                <div className="border-2 border-green-200 rounded-lg p-3 my-3 bg-white">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1 text-center">{meta.discountLabel}</div>
                    <div className="w-px self-stretch bg-gray-200" />
                    <div className="flex-1 text-center">
                      <div className="text-xs sm:text-sm text-gray-400 line-through leading-none">{meta.oldPrice}</div>
                      <div className="mt-1">{meta.price}</div>
                      {meta.priceSuffix && (
                        <div className="text-[11px] sm:text-xs text-gray-500 mt-0.5">{meta.priceSuffix}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Trust list */}
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2.5">
                    <Banknote className="w-5 h-5 text-theme-blue shrink-0" />
                    <div className="text-[11px] sm:text-xs font-bold text-gray-700 leading-tight">
                      <div>PAGAMENTO</div>
                      <div>{product.name === 'Member XXL' ? 'ONLINE' : 'ALLA CONSEGNA'}</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-theme-blue shrink-0" />
                    <div className="text-[11px] sm:text-xs font-bold text-gray-700 leading-tight">
                      <div>DISCREZIONE</div>
                      <div>GARANTITA</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Truck className="w-5 h-5 text-theme-blue shrink-0" />
                    <div className="text-[11px] sm:text-xs font-bold text-gray-700 leading-tight">
                      <div>{product.name === 'Member XXL' ? 'SPEDIZIONE' : 'SPEDIZIONE GRATIS'}</div>
                      <div>{product.name === 'Member XXL' ? "IN ITALIA E ALL'ESTERO" : 'IN ITALIA'}</div>
                    </div>
                  </li>
                </ul>

                {/* CTA */}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-auto block"
                  aria-label={meta.ctaText}
                >
                  <div className="bg-theme-green hover:bg-theme-darkgreen transition-colors text-white font-bold rounded-lg px-2 py-3 flex items-center justify-between gap-1 text-center">
                    <span className="flex-1 text-[11px] sm:text-sm leading-tight whitespace-nowrap">
                      {meta.ctaText}
                    </span>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  </div>
                </a>

                {/* Acquisto Sicuro */}
                <div className="flex items-center justify-center gap-1.5 mt-3 text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Acquisto Sicuro</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom feature bar */}
      <div className="mt-6 max-w-6xl mx-auto bg-theme-blue rounded-xl px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 text-white">
          {[
            { icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7" />, l1: 'Più Energia', l2: 'Quotidiana' },
            { icon: <UserCheck className="w-6 h-6 sm:w-7 sm:h-7" />, l1: 'Supporto alla', l2: 'Resistenza' },
            { icon: <Activity className="w-6 h-6 sm:w-7 sm:h-7" />, l1: 'Performance', l2: 'Uomo Naturale' },
            { icon: <Hourglass className="w-6 h-6 sm:w-7 sm:h-7" />, l1: 'Benessere', l2: 'Prolungato' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-2.5 justify-center md:justify-start">
              <div className="shrink-0">{item.icon}</div>
              <div className="text-xs sm:text-sm font-bold leading-snug">
                <div>{item.l1}</div>
                <div>{item.l2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductComparisonCards;
