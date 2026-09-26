import React from 'react';
import {
  Star,
  Check,
  X,
  Shield,
  Truck,
  BoxIcon,
  Scale,
  Zap,
  
  Leaf,
  Tag,
  Percent,
  Banknote,
  ShieldCheck,
  ShoppingCart,
} from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  rating: number;
  pros: string[];
  cons: string[];
  description: string;
  ingredients: string[];
  price: string;
  originalPrice?: string;
  link: string;
}

interface Props {
  products: Product[];
}

type Meta = {
  ribbon: string;
  ribbonColor: string;
  taglineIcon: React.ReactNode;
  tagline: string;
  taglineColor: string;
  chips: { icon: React.ReactNode; text: string }[];
  oldPrice: string;
  price: string;
  badge: { text: string; color: string };
  ctaColor: string;
  showSavings?: string;
  trustRow: { icon: React.ReactNode; l1: string; l2: string }[];
  shippingLine?: { icon: React.ReactNode; text: string; color: string };
  anonShipping?: boolean;
  isBestSeller?: boolean;
};

const getMeta = (name: string): Meta => {
  if (name === 'Tauro Plus') {
    return {
      ribbon: 'TOP SCELTA -40%',
      ribbonColor: 'bg-theme-green',
      taglineIcon: <Leaf className="w-4 h-4 text-theme-green" />,
      tagline: "Forza - Durata e Resistenza",
      taglineColor: 'text-theme-green',
      chips: [],
      oldPrice: '82,00€',
      price: '49€',
      badge: { text: '-40%', color: 'bg-theme-green' },
      ctaColor: 'bg-theme-green hover:bg-theme-darkgreen',
      
      trustRow: [
        { icon: <Banknote className="w-5 h-5" />, l1: 'PAGAMENTO', l2: 'ALLA CONSEGNA' },
        { icon: <ShieldCheck className="w-5 h-5" />, l1: 'DISCREZIONE', l2: 'GARANTITA' },
        { icon: <Truck className="w-5 h-5" />, l1: 'SPEDIZIONE GRATIS', l2: 'IN ITALIA' },
      ],
      shippingLine: {
        icon: <Tag className="w-4 h-4" />,
        text: 'Promo -40% + Spedizione Gratis',
        color: 'text-theme-green',
      },
      anonShipping: false,
      isBestSeller: true,
    };
  }
  if (name === 'Member XXL') {
    return {
      ribbon: 'PRENDI 3 PAGHI 2',
      ribbonColor: 'bg-theme-blue',
      taglineIcon: <Scale className="w-4 h-4 text-theme-blue" />,
      tagline: 'Equilibrio tra energia e controllo',
      taglineColor: 'text-theme-blue',
      chips: [],
      oldPrice: '52,99€',
      price: '35,32€',
      badge: { text: '3x2 ATTIVO', color: 'bg-theme-blue' },
      ctaColor: 'bg-theme-blue hover:bg-theme-darkblue',
      trustRow: [
        { icon: <Banknote className="w-5 h-5" />, l1: 'PAGAMENTO', l2: 'ONLINE' },
        { icon: <ShieldCheck className="w-5 h-5" />, l1: 'DISCREZIONE', l2: 'GARANTITA' },
        { icon: <Truck className="w-5 h-5" />, l1: 'SPEDIZIONE', l2: "IN ITALIA E ALL'ESTERO" },
      ],
    };
  }
  return {
    ribbon: 'PRENDI 2 PAGHI 1',
    ribbonColor: 'bg-theme-blue',
    taglineIcon: <Shield className="w-4 h-4 text-theme-blue" />,
    tagline: 'Supporto quotidiano per il benessere',
    taglineColor: 'text-theme-blue',
    chips: [],
    oldPrice: '96€',
    price: '59,99€',
    badge: { text: '2x1 ATTIVO', color: 'bg-theme-blue' },
    ctaColor: 'bg-theme-green hover:bg-theme-darkgreen',
    trustRow: [
      { icon: <Banknote className="w-5 h-5" />, l1: 'PAGAMENTO', l2: 'ALLA CONSEGNA' },
      { icon: <ShieldCheck className="w-5 h-5" />, l1: 'DISCREZIONE', l2: 'GARANTITA' },
      { icon: <Truck className="w-5 h-5" />, l1: 'SPEDIZIONE GRATIS', l2: 'IN ITALIA' },
    ],
    shippingLine: {
      icon: <Tag className="w-4 h-4" />,
      text: 'Promo 2x1 fino a esaurimento scorte',
      color: 'text-theme-green',
    },
  };
};

const renderStars = (ratingLabel: string = '4.8/5') => (
  <div className="flex items-center justify-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
    ))}
    <span className="ml-1.5 text-xs font-bold text-gray-700">{ratingLabel}</span>
  </div>
);

const ClassificaProductCards: React.FC<Props> = ({ products }) => {
  return (
    <div className="w-full">
      <h2
        id="classifica"
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 px-2 scroll-mt-20 leading-tight"
      >
        <span className="block lg:whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-3xl mb-1">
          <span className="text-theme-blue block sm:inline">Non Fare Scelte a Caso!</span>{' '}
          <span className="text-black font-bold block sm:inline">Confronta e Acquista dai Siti Ufficiali!</span>
        </span>
        <span className="text-theme-blue">Classifica 3 Top Integratori Naturali per Uomo</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {products.map((product) => {
          const meta = getMeta(product.name);
          return (
            <a
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={`Vai al sito ufficiale di ${product.name}`}
              className={`relative rounded-xl bg-white overflow-hidden flex flex-col group ${
                meta.isBestSeller
                  ? 'border-2 border-theme-blue shadow-xl'
                  : 'border border-gray-200 shadow-sm'
              } hover:shadow-2xl transition-shadow`}
            >
              {/* Top ribbon */}
              {product.name === 'Tauro Plus' ? (
                <div className="absolute top-2 right-2 z-10 bg-theme-green text-white text-xs sm:text-xs font-extrabold uppercase tracking-wide px-3 py-1.5 sm:px-2.5 sm:py-1 rounded-md shadow-md ring-1 ring-white/30">
                  BEST SELLER -40% OGGI
                </div>
              ) : (
                <div className={`absolute top-2 right-2 z-10 ${meta.ribbonColor} text-white text-xs sm:text-xs font-extrabold uppercase tracking-wide px-3 py-1.5 sm:px-2.5 sm:py-1 rounded-md shadow-md ring-1 ring-white/30`}>
                  {meta.ribbon}
                </div>
              )}

              <div className="p-4 sm:p-5 pt-12 flex flex-col flex-1">
                {/* Chips above image */}
                {meta.chips.length > 0 && (
                  <div className="flex flex-wrap justify-start gap-2 mb-3">
                    {meta.chips.map((chip, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 bg-blue-50 border border-blue-100 rounded-lg px-2.5 py-1.5 text-[10px] sm:text-xs font-semibold text-theme-blue shadow-sm"
                      >
                        {chip.icon}
                        <span className="whitespace-pre-line leading-tight">{chip.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Image */}
                <div className="relative flex justify-center items-center mb-2 min-h-[140px]">
                  <img
                    src={product.image}
                    alt={`${product.name} - integratore naturale per benessere maschile`}
                    width={product.imageWidth || 400}
                    height={product.imageHeight || 600}
                    loading="lazy"
                    className="h-32 sm:h-36 object-contain"
                  />
                  {meta.showSavings && (
                    <div className="absolute right-0 top-8 bg-green-100 text-green-700 font-semibold text-[11px] px-2 py-0.5 rounded-md border border-green-300">
                      {meta.showSavings}
                    </div>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mt-1">
                  {product.name}
                </h3>
                <div className="mt-1">{renderStars(product.name === 'Tauro Plus' ? '5/5' : '4.8/5')}</div>

                {/* Tagline */}
                <div className={`flex items-center justify-center gap-1.5 mt-2 ${meta.taglineColor}`}>
                  {meta.taglineIcon}
                  <span className="text-[17px] sm:text-sm font-bold sm:font-semibold text-center leading-snug">
                    {meta.tagline}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[15px] sm:text-sm text-gray-700 leading-relaxed text-center mt-3">
                  {product.name === 'Tauro Plus' ? (
                    <>
                      Tauro Plus è un integratore maschile naturale al 100% formulato per supportare <strong className="font-bold text-gray-900">le performance dell'uomo nei momenti che contano</strong>. E' stato scelto da molti uomini perchè è in grado di supportare il flusso sanguigno, l'energia, la forza e la resistenza. Ideale per gli uomini che vogliono sentirsi sempre al top in modo naturale!
                    </>
                  ) : product.description}
                </p>


                {/* Ingredienti principali */}
                {product.ingredients && product.ingredients.length > 0 && (
                  <div className="mt-3 text-center">
                    <h4 className="text-[17px] sm:text-base font-bold text-gray-900 mb-1">
                      {product.name === 'Tauro Plus' ? 'Tauro Plus Ingredienti Principali:' : product.name === 'Member XXL' ? 'Member XXL Ingredienti Principali:' : product.name === 'Blue Bull' ? 'Blue Bull Ingredienti Principali:' : 'Ingredienti principali:'}
                    </h4>
                    <ul className="space-y-1">
                      {product.ingredients.map((ing, i) => (
                        <li key={i} className="text-[15px] sm:text-sm text-gray-700 leading-relaxed">
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tauro Plus authenticity box */}
                {product.name === 'Tauro Plus' && (
                  <div className="flex items-center gap-2 mt-3 p-2.5 rounded-md border border-theme-green bg-theme-green/10">
                    <Shield className="w-7 h-7 text-theme-green flex-shrink-0" strokeWidth={2.5} />
                    <p className="text-[13px] sm:text-xs font-semibold text-gray-800 leading-snug text-center">
                      <span className="font-bold text-black">Qui trovi solo Tauro Plus Originale al miglior prezzo sul web!</span>
                    </p>
                  </div>
                )}

                {/* Ritrova Te Stesso heading */}
                {product.name === 'Tauro Plus' && (
                  <h4 className="text-[17px] sm:text-base font-bold text-gray-900 text-center mt-4">
                    Ritrova Te Stesso!
                  </h4>
                )}

                {/* Vantaggi / Svantaggi */}
                <div className="grid grid-cols-2 gap-3 mt-6 text-left items-start">
                  {/* Vantaggi card */}
                  <div className="relative rounded-xl border-2 border-theme-green bg-green-50/40 pt-7 pb-3 px-2.5 sm:px-3">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-2 border-theme-green flex items-center justify-center shadow-sm">
                      <Check className="w-4 h-4 text-theme-green" strokeWidth={3} />
                    </div>
                    <div className="relative -mt-3 mb-3 mx-auto w-fit">
                      <div className="bg-theme-green text-white text-[13px] sm:text-sm font-bold px-4 py-1 rounded-md shadow-sm">
                        Vantaggi
                      </div>
                      <div
                        className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-theme-green"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                      />
                    </div>
                    <ul className="divide-y divide-green-200/70">
                      {product.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 py-2 text-[13px] sm:text-sm text-gray-900 leading-snug">
                          <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="w-3 h-3 text-theme-green" strokeWidth={3} />
                          </span>
                          <span className="font-bold">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Svantaggi card */}
                  <div className="relative rounded-xl border-2 border-red-500 bg-red-50/40 pt-7 pb-3 px-2.5 sm:px-3">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-2 border-red-500 flex items-center justify-center shadow-sm">
                      <X className="w-4 h-4 text-red-500" strokeWidth={3} />
                    </div>
                    <div className="relative -mt-3 mb-3 mx-auto w-fit">
                      <div className="bg-red-500 text-white text-[13px] sm:text-sm font-bold px-4 py-1 rounded-md shadow-sm">
                        Svantaggi
                      </div>
                      <div
                        className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-red-500"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                      />
                    </div>
                    <ul className="divide-y divide-red-200/70">
                      {product.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 py-2 text-[13px] sm:text-sm text-gray-900 leading-snug">
                          <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                            <X className="w-3 h-3 text-red-500" strokeWidth={3} />
                          </span>
                          <span className="font-bold">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Dove si Compra info box (Tauro Plus only) */}
                {(product.name === 'Tauro Plus' || product.name === 'Member XXL' || product.name === 'Blue Bull') && (
                  <div className="mt-4 rounded-xl border-2 border-theme-blue/30 bg-gradient-to-br from-blue-50 to-white p-3 sm:p-4 shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-theme-blue flex items-center justify-center shadow">
                        <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="text-[17px] sm:text-lg font-bold text-gray-900 mb-1.5">
                          {product.name}: Dove si Compra?
                        </h4>
                        {product.name === 'Member XXL' ? (
                          <>
                            <p className="text-[14px] sm:text-sm leading-relaxed mb-2">
                              <span className="font-bold text-theme-blue">Sul nostro sito puoi acquistare Member XXL originale</span> <span className="text-gray-800">approfittando del prezzo promozionale attualmente disponibile.</span>
                            </p>
                            <p className="text-[14px] sm:text-sm text-gray-800 leading-relaxed">
                              Collaboriamo <span className="font-bold text-theme-blue">direttamente con il produttore ufficiale</span> per garantirti un acquisto sicuro, la massima autenticità del prodotto e una spedizione discreta e riservata direttamente a casa tua.
                            </p>
                          </>
                        ) : product.name === 'Blue Bull' ? (
                          <>
                            <p className="text-[14px] sm:text-sm text-gray-800 leading-relaxed mb-2">
                              Blue Bull è disponibile esclusivamente sul <span className="font-bold text-theme-blue">sito ufficiale</span>, l'unico canale che garantisce un prodotto originale e certificato.
                            </p>
                            <p className="text-[14px] sm:text-sm text-gray-800 leading-relaxed">
                              Tramite il nostro sito potrai accedere direttamente al sito ufficiale, approfittare delle offerte disponibili e ottenere una spedizione discreta e veloce in tutta Italia.
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="text-[14px] sm:text-sm leading-relaxed mb-2">
                              <span className="font-bold text-theme-blue">Sul nostro sito hai la certezza di acquistare {product.name} originale</span> <span className="text-gray-800">direttamente dal produttore ufficiale.</span>
                            </p>
                            <p className="text-[14px] sm:text-sm leading-relaxed">
                              <span className="font-bold text-theme-blue">Effettuerai un acquisto sicuro e garantito</span><span className="text-gray-800">, con la sicurezza di ricevere il prodotto autentico al prezzo promozionale attualmente disponibile.</span>
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Price box */}
                <div className="mt-4 border border-gray-200 rounded-lg p-3 bg-gray-50">
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <span className="text-sm text-gray-400 line-through">{meta.oldPrice}</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-theme-green">
                      {meta.price}
                    </span>
                    <span className={`${meta.badge.color} text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md`}>
                      {meta.badge.text}
                    </span>
                  </div>
                  {meta.shippingLine && (
                    <div className={`flex items-center justify-center gap-1.5 mt-2 ${meta.shippingLine.color} text-sm sm:text-base font-bold`}>
                      {meta.shippingLine.icon}
                      <span>{meta.shippingLine.text}</span>
                    </div>
                  )}
                  {meta.anonShipping && (
                    <div className="flex items-center justify-center gap-1.5 mt-1 text-xs font-semibold" style={{ color: '#FF3D00' }}>
                      <BoxIcon className="w-4 h-4" />
                      <span>Spedizione anonima all'indirizzo che vuoi tu</span>
                    </div>
                  )}
                  {product.name === 'Member XXL' && (
                    <div className="flex items-center justify-center gap-1.5 mt-2 text-theme-blue text-sm sm:text-base font-bold">
                      <Tag className="w-4 h-4" />
                      <span>Promo 3x2 a disponibilità limitata</span>
                    </div>
                  )}
                </div>

                {/* Trust row (Member XXL) */}
                {meta.trustRow.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {meta.trustRow.map((t, i) => (
                      <div key={i} className="flex items-center gap-1.5 justify-center">
                        <div className="text-theme-blue shrink-0">{t.icon}</div>
                        <div className="text-[9px] sm:text-[10px] font-bold text-gray-700 leading-tight">
                          <div>{t.l1}</div>
                          <div>{t.l2}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="mt-4">
                  <div
                    className={`${meta.ctaColor} transition-colors text-white font-bold rounded-lg px-3 py-3.5 flex items-center justify-center gap-2 text-center uppercase tracking-wide shadow-md`}
                  >
                    <span className="text-sm sm:text-base">{product.name === 'Tauro Plus' ? 'TAURO PLUS SITO UFFICIALE' : product.name === 'Member XXL' ? 'MEMBER XXL SITO UFFICIALE' : product.name === 'Blue Bull' ? 'BLUE BULL SITO UFFICIALE' : 'VAI AL SITO UFFICIALE'}</span>
                    <span>❯</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 mt-2 text-green-600">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs font-medium">Prodotto Originale Garantito</span>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Bottom feature bar */}
      <div className="mt-6 max-w-6xl mx-auto bg-blue-50 border border-blue-100 rounded-xl px-4 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: <Tag className="w-7 h-7 text-theme-blue" />,
              l1: 'PREZZI MIGLIORI',
              l2: "Risparmio garantito tutto l'anno",
            },
            {
              icon: <Percent className="w-7 h-7 text-theme-blue" />,
              l1: 'PROMOZIONI ESCLUSIVE',
              l2: 'Offerte imperdibili ogni giorno',
            },
            {
              icon: <ShieldCheck className="w-7 h-7 text-theme-blue" />,
              l1: 'ACQUISTO SICURO',
              l2: 'Solo prodotti originali e certificati',
            },
            {
              icon: <Truck className="w-7 h-7 text-theme-blue" />,
              l1: 'SPEDIZIONE GRATIS IN ITALIA',
              l2: 'Consegna rapida e discreta',
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
              <div className="shrink-0">{item.icon}</div>
              <div className="leading-tight">
                <div className="text-xs sm:text-sm font-bold text-theme-blue">{item.l1}</div>
                <div className="text-[11px] sm:text-xs text-gray-600">{item.l2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassificaProductCards;
