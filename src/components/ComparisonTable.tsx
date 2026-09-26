import React from 'react';
import StarRating from './StarRating';
import CTAButton from './CTAButton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface ProductComparisonProps {
  products: {
    name: string;
    rating: number;
    image?: string;
    ingredients: string[];
    benefits: string[];
    usage: string;
    pros: string[];
    cons: string[];
    price: string;
    promotion: string;
    promoLabel?: string;
    affiliateLink?: string;
  }[];
}

const ComparisonTable: React.FC<ProductComparisonProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div 
          key={index} 
          className="bg-blue-50 rounded-xl shadow-md overflow-hidden border border-blue-100 relative"
        >
          {/* Product Header */}
          <div className="bg-[#0066cc] text-white p-4 text-center">
            <h3 className="text-xl font-bold text-white">{product.name}</h3>
            <div className="flex justify-center mt-2">
              <StarRating rating={product.rating} size="lg" />
            </div>
          </div>

          {/* Product Image with Promo Label */}
          <div className="bg-white p-4 flex justify-center relative">
            <div className="h-48 flex items-center justify-center">
              {product.image && (
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-full object-contain"
                />
              )}
            </div>
            {product.promoLabel && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-500 hover:bg-green-600 text-white font-medium px-1.5 py-0.5 text-[0.65rem] uppercase">
                  {product.promoLabel}
                </Badge>
              </div>
            )}
          </div>

          {/* Product Content */}
          <div className="p-4">
            {/* Ingredients */}
            <div className="mb-6">
              <h4 className="text-[#0066cc] font-semibold mb-2">Ingredienti Principali:</h4>
              <ul className="list-disc pl-5">
                {product.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="mb-6">
              <h4 className="text-[#0066cc] font-semibold mb-2">Benefici:</h4>
              <ul className="list-disc pl-5">
                {product.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>

            {/* Usage */}
            <div className="mb-6">
              <h4 className="text-[#0066cc] font-semibold mb-2">Modalità d'uso:</h4>
              <p>{product.usage}</p>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="text-green-600 font-semibold mb-2">Pro:</h4>
                <ul className="text-green-700">
                  {product.pros.map((pro, i) => (
                    <li key={i} className="flex items-start mb-1">
                      <span className="text-green-500 mr-1">✓</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-red-600 font-semibold mb-2">Contro:</h4>
                <ul className="text-red-600">
                  {product.cons.map((con, i) => (
                    <li key={i} className="flex items-start mb-1">
                      <span className="text-red-500 mr-1">✗</span> {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer with Price and CTA */}
          <div className="bg-white p-4 border-t border-blue-100 text-center">
            <div className="text-2xl font-bold text-[#0066cc] mb-3">{product.price}</div>
            <div className="text-green-500 font-semibold mb-4">{product.promotion}</div>
            {product.affiliateLink ? (
              <a 
                href={product.affiliateLink} 
                rel="nofollow noopener noreferrer"
                className="w-full"
              >
                <CTAButton variant="primary" size="md" className="w-full">VAI SUL SITO UFFICIALE</CTAButton>
              </a>
            ) : (
              <CTAButton variant="primary" size="md">VAI SUL SITO UFFICIALE</CTAButton>
            )}
            <p className="text-sm text-green-700 mt-2 font-medium">Spedizione Gratuita - Consegna 24H</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComparisonTable;
