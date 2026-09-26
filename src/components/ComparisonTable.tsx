import React from 'react';
import { Check, Tag, Truck, TrendingUp, Clock, UserCheck, Leaf, ShieldCheck, Trophy, Headphones } from 'lucide-react';

interface ComparisonProduct {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: string;
  link: string;
}

interface ComparisonTableProps {
  products: ComparisonProduct[];
}

type ProductMeta = {
  badge?: string;
  actionTitle: string;
  actionIcon: React.ReactNode;
  actionDescription: string;
  pros: string[];
  shippingTitle: string;
  shippingSubtitle: string;
  price: string;
  originalPrice: string;
  discountTag: string;
  rowBg: string;
  accentText: string;
  iconBg: string;
  checkColor: string;
  shippingIconColor: string;
  priceColor: string;
  ctaClass: string;
};

const ComparisonTable: React.FC<ComparisonTableProps> = ({ products }) => {
  const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);

  const getMeta = (productName: string): ProductMeta => {
    if (productName === 'Tauro Plus') {
      return {
        badge: 'TOP SELLER',
        actionTitle: 'Agisce in modo progressivo',
        actionIcon: <TrendingUp className="w-7 h-7" />,
        actionDescription: 'Formula naturale al 100% concentrata e sicura.',
        pros: [
          'Massima concentrazione di principi attivi',
          'Ideale per ritrovare te stesso',
          'Alta qualità certificata',
        ],
        shippingTitle: 'Veloce Gratis 48H',
        shippingSubtitle: 'Tracciata e riservata',
        price: '49€',
        originalPrice: '81,90€',
        discountTag: '-40%',
        rowBg: 'bg-blue-50',
        accentText: 'text-blue-600',
        iconBg: 'bg-blue-100 text-blue-600',
        checkColor: 'text-blue-600',
        shippingIconColor: 'text-blue-600',
        priceColor: 'text-blue-600',
        ctaClass: 'bg-green-600 text-white hover:bg-green-700 border-green-600',
      };
    }
    if (productName === 'Member XXL') {
      return {
        actionTitle: 'Supporto costante nel tempo',
        actionIcon: <Clock className="w-7 h-7" />,
        actionDescription: 'Formulazione studiata per offrire sostegno quotidiano e prolungato.',
        pros: [
          'Azione prolungata e bilanciata',
          "Perfetto per l'uso quotidiano",
          'Ottimo rapporto qualità-prezzo',
        ],
        shippingTitle: 'Veloce e Discreta',
        shippingSubtitle: 'Tracciata e riservata',
        price: '35,32€',
        originalPrice: '52,90€',
        discountTag: '3x2',
        rowBg: 'bg-white',
        accentText: 'text-green-600',
        iconBg: 'bg-green-100 text-green-600',
        checkColor: 'text-green-600',
        shippingIconColor: 'text-green-600',
        priceColor: 'text-green-600',
        ctaClass: 'bg-white text-green-600 hover:bg-green-50 border-green-600',
      };
    }
    return {
      actionTitle: 'Supporta energia e benessere generale',
      actionIcon: <UserCheck className="w-7 h-7" />,
      actionDescription: 'Aiuta a migliorare energia, resistenza e benessere psico-fisico.',
      pros: [
        'Favorisce energia e forza',
        'Sostiene il benessere fisico e mentale',
        'Ingredienti selezionati di alta qualità',
      ],
      shippingTitle: 'Veloce Gratis 48H',
      shippingSubtitle: 'Tracciata e riservata',
      price: '59,99€',
      originalPrice: '89,90€',
      discountTag: '2x1',
      rowBg: 'bg-white',
      accentText: 'text-indigo-600',
      iconBg: 'bg-indigo-100 text-indigo-600',
      checkColor: 'text-indigo-600',
      shippingIconColor: 'text-indigo-600',
      priceColor: 'text-indigo-600',
      ctaClass: 'bg-white text-indigo-600 hover:bg-indigo-50 border-indigo-600',
    };
  };

  const ShopButton: React.FC<{ link: string; ctaClass: string; productName: string }> = ({
    link,
    ctaClass,
    productName,
  }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={(e) => e.stopPropagation()}
      aria-label={`Vai allo shop ufficiale di ${productName}`}
      className={`inline-flex items-center justify-center w-full rounded-lg px-4 py-2.5 font-bold text-sm border-2 transition-all ${ctaClass}`}
    >
      SHOP UFFICIALE
    </a>
  );

  const TrustSignals = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-6 border-t bg-gray-50/50">
      {[
        { icon: <Leaf className="w-6 h-6" />, title: 'Ingredienti di qualità', subtitle: 'Selezionati e testati' },
        { icon: <ShieldCheck className="w-6 h-6" />, title: 'Sicurezza garantita', subtitle: 'Prodotti certificati' },
        { icon: <Trophy className="w-6 h-6" />, title: 'Valutazione', subtitle: 'Soddisfazione clienti' },
        { icon: <Headphones className="w-6 h-6" />, title: 'Assistenza esperta', subtitle: 'Sempre al tuo fianco' },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2 md:gap-3">
          <div className="text-gray-700 shrink-0">{item.icon}</div>
          <div className="min-w-0">
            <div className="font-bold text-xs md:text-sm text-gray-900 leading-tight">{item.title}</div>
            <div className="text-[11px] md:text-xs text-gray-500 leading-tight">{item.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
      {/* Header - hidden on mobile */}
      <div className="hidden md:grid grid-cols-12 gap-3 bg-[#0B1B3F] text-white px-4 py-4 text-xs font-bold tracking-wider">
        <div className="col-span-2 text-center">PRODOTTO</div>
        <div className="col-span-2 text-center">AZIONE PRINCIPALE</div>
        <div className="col-span-3 text-center">PUNTI DI FORZA</div>
        <div className="col-span-2 text-center">SPEDIZIONE</div>
        <div className="col-span-1 text-center">PREZZO</div>
        <div className="col-span-2 text-center">LINK</div>
      </div>

      {sortedProducts.map((product) => {
        const meta = getMeta(product.name);
        return (
          <div
            key={product.id}
            className={`${meta.rowBg} border-b border-gray-200 last:border-b-0`}
          >
            {/* Desktop layout */}
            <div className="hidden md:grid grid-cols-12 gap-3 px-4 py-6 items-center">
              {/* Prodotto */}
              <div className="col-span-2 flex flex-col items-center text-center">
                <img
                  src={product.image}
                  alt={`${product.name} - integratore naturale`}
                  width="80"
                  height="80"
                  loading="lazy"
                  className="w-20 h-20 object-contain mb-2"
                />
                <h3 className="font-bold text-base text-gray-900 leading-tight">{product.name}</h3>
                {meta.badge && (
                  <span className="mt-1 inline-block bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {meta.badge}
                  </span>
                )}
                <div className="flex gap-0.5 mt-1.5 text-yellow-400 text-sm">★★★★★</div>
              </div>

              {/* Azione Principale */}
              <div className="col-span-2 flex flex-col items-center text-center px-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${meta.iconBg}`}>
                  {meta.actionIcon}
                </div>
                <div className={`font-bold text-sm ${meta.accentText} leading-tight mb-1`}>
                  {meta.actionTitle}
                </div>
                <div className="text-xs text-gray-600 leading-snug">{meta.actionDescription}</div>
              </div>

              {/* Punti di forza */}
              <div className="col-span-3 px-2">
                <ul className="space-y-2">
                  {meta.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${meta.checkColor}`} strokeWidth={3} />
                      <span className="leading-snug">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spedizione */}
              <div className="col-span-2 flex flex-col items-center text-center">
                <Truck className={`w-10 h-10 mb-1.5 ${meta.shippingIconColor}`} strokeWidth={1.5} />
                <div className={`font-bold text-sm ${meta.accentText} leading-tight`}>{meta.shippingTitle}</div>
                <div className="text-xs text-gray-500 mt-0.5">{meta.shippingSubtitle}</div>
              </div>

              {/* Prezzo */}
              <div className="col-span-1 flex flex-col items-center text-center">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-2 py-2 w-full">
                  <div className={`font-extrabold text-base ${meta.priceColor} leading-tight`}>€ {meta.price}</div>
                  <div className="inline-flex items-center gap-0.5 bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mt-1">
                    <Tag className="w-2.5 h-2.5" />
                    {meta.discountTag}
                  </div>
                  <div className="text-[11px] text-gray-400 line-through mt-1">€ {meta.originalPrice}</div>
                </div>
              </div>

              {/* Link */}
              <div className="col-span-2 flex flex-col items-stretch gap-2 px-1">
                <ShopButton link={product.link} ctaClass={meta.ctaClass} productName={product.name} />
                <div className="space-y-1 text-[11px] text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span>Pagamento sicuro</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-green-600 shrink-0" strokeWidth={3} />
                    <span>Reso garantito 30 giorni</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Headphones className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span>Assistenza dedicata</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile layout */}
            <div className="md:hidden p-4 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                <img
                  src={product.image}
                  alt={`${product.name} - integratore naturale`}
                  width="64"
                  height="64"
                  loading="lazy"
                  className="w-16 h-16 object-contain shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">{product.name}</h3>
                  {meta.badge && (
                    <span className="mt-1 inline-block bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {meta.badge}
                    </span>
                  )}
                  <div className="flex gap-0.5 mt-1 text-yellow-400 text-sm">★★★★★</div>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-2 py-1.5 text-center shrink-0">
                  <div className={`font-extrabold text-sm ${meta.priceColor} leading-tight`}>€ {meta.price}</div>
                  <div className="inline-flex items-center gap-0.5 bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5">
                    {meta.discountTag}
                  </div>
                  <div className="text-[10px] text-gray-400 line-through mt-0.5">€ {meta.originalPrice}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${meta.iconBg}`}>
                  {meta.actionIcon}
                </div>
                <div className="min-w-0">
                  <div className={`font-bold text-sm ${meta.accentText} leading-tight`}>{meta.actionTitle}</div>
                  <div className="text-xs text-gray-600 leading-snug mt-0.5">{meta.actionDescription}</div>
                </div>
              </div>

              <ul className="space-y-1.5">
                {meta.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${meta.checkColor}`} strokeWidth={3} />
                    <span className="leading-snug">{pro}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                <Truck className={`w-8 h-8 shrink-0 ${meta.shippingIconColor}`} strokeWidth={1.5} />
                <div>
                  <div className={`font-bold text-sm ${meta.accentText} leading-tight`}>{meta.shippingTitle}</div>
                  <div className="text-xs text-gray-500">{meta.shippingSubtitle}</div>
                </div>
              </div>

              <ShopButton link={product.link} ctaClass={meta.ctaClass} productName={product.name} />

              <div className="grid grid-cols-3 gap-2 text-[11px] text-gray-600">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-600 shrink-0" />
                  <span>Sicuro</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-green-600 shrink-0" strokeWidth={3} />
                  <span>Reso 30gg</span>
                </div>
                <div className="flex items-center gap-1">
                  <Headphones className="w-3.5 h-3.5 text-green-600 shrink-0" />
                  <span>Assistenza</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <TrustSignals />
    </div>
  );
};

export default ComparisonTable;
