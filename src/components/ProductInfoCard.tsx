import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import OptimizedImage from './OptimizedImage';

interface ProductInfoCardProps {
  title: string;
  introduction: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
  packaging: string;
  experience: string | {
    percentage: string;
    recommendation: string;
  } | {
    offerDetails: {
      title: string;
      price: string;
      discount: string;
      shipping: string;
      guarantee: string;
    }
  };
  whereToBuy: string;
  className?: string;
  image?: string;
  slogan?: string;
  rating?: number;
  promoLabel?: string;
  testimonials?: {
    quotes: Array<{
      text: string;
      author: string;
      age?: number;
    }>;
  };
  id?: string;
  affiliateLink?: string;
}

const ProductInfoCard: React.FC<ProductInfoCardProps> = React.memo(({
  title,
  introduction,
  ingredients,
  benefits,
  usage,
  packaging,
  experience,
  whereToBuy,
  className = '',
  image,
  slogan,
  rating = 0,
  promoLabel,
  testimonials,
  id,
  affiliateLink,
}) => {
  return (
    <div 
      id={id}
      className={cn(
        "bg-white rounded-xl shadow-md overflow-hidden relative",
        className
      )}
    >
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-[#0066cc] mb-4">{title}</h3>
        
        {rating > 0 && (
          <div className="mb-4 flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className={`w-6 h-6 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`}
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path 
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            ))}
          </div>
        )}
        
        {slogan && (
          <div className="mb-4">
            <p className="text-green-500 font-semibold text-lg">( {slogan} )</p>
          </div>
        )}
        
        <div className="flex flex-col md:flex-row gap-6 mb-5">
          {image && (
            <div className="flex justify-center md:justify-start relative">
              <div className="w-32 h-32 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center overflow-hidden">
                <OptimizedImage 
                  src={image} 
                  alt={title.split(":")[1] || title} 
                  className="max-w-full max-h-full object-contain"
                  width={128}
                  height={128}
                  loading="lazy"
                />
              </div>
              {promoLabel && (
                <div className="absolute -bottom-2 -right-2">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white font-medium px-1.5 py-0.5 text-xs uppercase">
                    {promoLabel}
                  </Badge>
                </div>
              )}
            </div>
          )}
          
          <p className="text-gray-700 flex-1">{introduction}</p>
        </div>
        
        <div className="mb-5">
          <h4 className="font-semibold text-[#0066cc] mb-2">Ingredienti attivi e proprietà</h4>
          <ul className="list-disc pl-5 text-gray-700">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="mb-1">{ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-5">
          <h4 className="font-semibold text-[#0066cc] mb-2">Benefici potenziali</h4>
          <ul className="list-disc pl-5 text-gray-700">
            {benefits.map((benefit, index) => (
              <li 
                key={index} 
                className="mb-1"
                dangerouslySetInnerHTML={{ __html: benefit }}
              />
            ))}
          </ul>
          <div className="mt-4 flex justify-center">
            {affiliateLink ? (
              <a 
                href={affiliateLink} 
                rel="nofollow noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white w-full md:w-auto">SCOPRI DI PIU'</Button>
              </a>
            ) : (
              <Button className="bg-green-500 hover:bg-green-600 text-white w-full md:w-auto">SCOPRI DI PIU'</Button>
            )}
          </div>
        </div>
        
        <div className="mb-5">
          <h4 className="font-semibold text-[#0066cc] mb-2">Modalità d'uso</h4>
          <p className="text-gray-700">{usage}</p>
        </div>
        
        <div className="mb-5">
          <h4 className="font-semibold text-[#0066cc] mb-2">Confezione/formato</h4>
          <p className="text-gray-700">{packaging}</p>
        </div>
        
        {typeof experience === 'string' ? (
          <div className="mb-5">
            <h4 className="font-semibold text-[#0066cc] mb-2">Esperienza d'uso secondo i consumatori</h4>
            <p className="text-gray-700">{experience}</p>
          </div>
        ) : 'offerDetails' in (experience as any) ? (
          <div className="mb-5 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-xl font-bold text-blue-600 mb-4">{(experience as any).offerDetails.title}</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 mb-1">Promo Attiva:</p>
                <p className="text-blue-600 text-2xl font-bold">{(experience as any).offerDetails.price}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Sconto:</p>
                <p className="text-blue-600 text-2xl font-bold">{(experience as any).offerDetails.discount}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Spedizione:</p>
                <p className="text-blue-600 font-semibold">{(experience as any).offerDetails.shipping}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Garanzia:</p>
                <p className="text-blue-600 font-semibold">{(experience as any).offerDetails.guarantee}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-5 bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-600 mb-3 text-center">Esperienza d'uso secondo i consumatori</h4>
            <div className="flex justify-center mb-3">
              <div className="bg-green-500 text-white text-xl font-bold rounded-full w-14 h-14 flex items-center justify-center">
                {(experience as any).percentage}
              </div>
            </div>
            <p className="text-center text-green-700 font-medium">
              {(experience as any).recommendation}
            </p>
          </div>
        )}
        
        {/* Add green button before testimonials */}
        <div className="mb-5 flex justify-center">
          {affiliateLink ? (
            <a 
              href={affiliateLink} 
              rel="nofollow noopener noreferrer"
              className="w-full md:w-auto"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 w-full md:w-auto">VAI AL SITO UFFICIALE</Button>
            </a>
          ) : (
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 w-full md:w-auto">VAI AL SITO UFFICIALE</Button>
          )}
        </div>
        
        {testimonials && (
          <div className="mb-5 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-600 mb-4 text-center">Testimonianze</h4>
            <div className="space-y-4">
              {testimonials.quotes.map((quote, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-700 italic mb-2">"{quote.text}"</p>
                  <p className="text-blue-700 font-medium text-sm">– {quote.author}{quote.age ? `, ${quote.age} anni` : ''}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="mb-6">
          <h4 className="font-semibold text-[#0066cc] mb-2">Dove si acquista</h4>
          <p className="text-gray-700">{whereToBuy}</p>
          <div className="mt-4 flex justify-center">
            {affiliateLink ? (
              <a 
                href={affiliateLink} 
                rel="nofollow noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white w-full md:w-auto">ORDINA ORA</Button>
              </a>
            ) : (
              <Button className="bg-green-500 hover:bg-green-600 text-white w-full md:w-auto">ORDINA ORA</Button>
            )}
          </div>
        </div>
        
        <div className="text-xs text-gray-500 italic border-t border-gray-200 pt-4">
          Queste informazioni non sostituiscono il parere di un medico. I risultati possono variare da persona a persona. Leggere sempre le etichette e le indicazioni prima dell'uso.
        </div>
      </div>
    </div>
  );
});

// Set display name for debugging
ProductInfoCard.displayName = 'ProductInfoCard';

export default ProductInfoCard;
