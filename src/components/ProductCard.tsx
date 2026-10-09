
import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, Check, X, Truck, Shield, BoxIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";


interface ProductCardProps {
  product: {
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
    effectSpeed: string;
    price: string;
    originalPrice?: string;
    link: string;
    freeShipping?: boolean;
    hasMultipackDiscount?: boolean;
  };
  recommended?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, recommended = false }) => {
  const renderRating = (rating: number) => {
    const starColor = product.id === 1 ? "#ebb30b" : "#eab308";
    return (
      <div className="flex items-center gap-1 my-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < Math.floor(rating) ? "fill-current opacity-100" : (i < rating ? "fill-current opacity-60" : "text-gray-300")}`}
            style={i < rating ? { color: starColor } : undefined}
          />
        ))}
        <span className="ml-2 text-black font-extrabold text-sm">{rating}/5</span>
      </div>
    );
  };

  const renderDescription = (id: number, description: string) => {
    if (id === 1) {
      // For Tauro Plus, we want special formatting
      return (
        <>
          <p className="text-sm leading-relaxed font-medium text-gray-800 mb-4 text-center">
            Tauro Plus è un integratore per uomo formulato con ingredienti di origine naturale, pensato per chi cerca un supporto per forza, durata e resistenza.
          </p>
          <div className="flex items-center gap-3 mb-4 p-3 rounded-md border border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-50 shadow-sm">
            <Shield className="w-10 h-10 text-amber-500 flex-shrink-0" strokeWidth={2.5} />
            <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
              <span className="font-bold text-black">Qui trovi solo Tauro Plus Originale!</span> Diffida da confezioni diverse e da <span className="font-bold">prezzi differenti</span>.
            </p>
          </div>
        </>
      );
    } else if (id === 2) {
      // For Member XXL (now id 2)
      return (
        <p className="text-sm leading-relaxed font-medium text-gray-800 mb-4">
          Member XXL è formulato specificamente non solo per il benessere maschile, ma anche per favorire una maggiore forza. <span className="font-bold text-black">La sua formula esclusiva stimola il flusso sanguigno</span>. E' un integratore naturale al 100% che favorisce serenità, sicurezza, resistenza, energia e controllo.
        </p>
      );
    } else if (id === 3) {
      // For Blue Bull (now id 3)
      return (
        <p className="text-sm leading-relaxed font-medium text-gray-800 mb-4">
          Blue Bull integratore combina ingredienti naturali selezionati per migliorare il benessere maschile. La sua formula specifica <span className="font-bold text-black">aiuta a migliorare forza, energia e resistenza</span>. Un integratore totalmente naturale che ti permetterà di ritrovare te stesso nei momenti che contano!
        </p>
      );
    }
    return <p className="text-sm leading-relaxed font-medium text-gray-800 mb-4">{description}</p>;
  };
  
  const renderIngredientsList = (id: number, ingredients: string[]) => {
    if (id === 1) {
      // For Tauro Plus, centered list without bullet points
      return (
        <div className="text-sm text-gray-700 font-medium">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="mb-1 text-center">{ingredient}</div>
          ))}
        </div>
      );
    } else if (id === 2) {
      // For Blue Bull, centered list without bullet points
      return (
        <div className="text-sm text-gray-700 font-medium">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="mb-1 text-center">{ingredient}</div>
          ))}
        </div>
      );
    } else if (id === 3) {
      // For Member XXL, centered list without bullet points
      return (
        <div className="text-sm text-gray-700 font-medium">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="mb-1 text-center">{ingredient}</div>
          ))}
        </div>
      );
    }
    
    // For other products, keep the bullet points
    return (
      <ul className="text-sm text-gray-700 font-medium list-disc pl-5">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    );
  };
  
  return (
    <a 
      href={product.link} 
      target="_blank" 
      rel="noopener noreferrer nofollow"
      className="block w-full h-full cursor-pointer"
    >
      <div 
        id={product.id === 1 ? "tauroplus" : undefined}
        className={`relative rounded-lg overflow-hidden border shadow-lg p-4 hover:shadow-xl transition-shadow ${recommended ? 'ring-2 ring-theme-blue shadow-xl' : ''}`}
      >
        {recommended && <div className="absolute top-0 right-0 bg-theme-green text-white px-2 py-0.5 text-xs font-bold">TOP SCELTA -40%</div>}
        {product.hasMultipackDiscount && <div className="absolute top-0 right-0 bg-theme-blue text-white px-2 py-0.5 text-xs font-bold">PRENDI 3 PAGHI 2</div>}
        {product.id === 2 && <div className="absolute top-0 right-0 text-white px-2 py-0.5 text-xs font-bold" style={{ backgroundColor: '#4464e3' }}>PRENDI 3 PAGHI 2</div>}
        {product.id === 3 && <div className="absolute top-0 right-0 text-white px-2 py-0.5 text-xs font-bold" style={{ backgroundColor: '#4464e3' }}>PRENDI 2 PAGHI 1</div>}
        
        <div className="flex flex-col h-full">
        <div className="text-center mb-3">
          <h3 className="text-xl font-bold mb-1">{product.name}</h3>
          <div className="flex justify-center">{renderRating(product.rating)}</div>
        </div>
        
        <div className="flex justify-center mb-4 relative">
          <img 
            src={product.image} 
            alt={`${product.name} - integratore naturale per benessere maschile`}
            width={product.imageWidth || 400}
            height={product.imageHeight || 600}
            loading="lazy"
            className="h-48 object-contain" 
          />
          {product.id === 1 && (
            <div className="absolute top-0 right-0 bg-green-100 text-green-600 font-semibold text-xs px-2 py-1 rounded-md border border-green-300">
              Risparmia 33€
            </div>
          )}
        </div>
        
        {renderDescription(product.id, product.description)}
        
        <div className="space-y-4 flex-grow">
          <div>
            <h4 className="font-semibold text-base mb-1">Ingredienti principali:</h4>
            {renderIngredientsList(product.id, product.ingredients)}
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <h4 className="font-semibold text-base text-theme-green mb-1">Vantaggi:</h4>
              <ul className="space-y-1.5">
                {product.pros.map((pro, index) => {
                  let text = pro;
                  if(product.id === 3){
                    // Update specific text for Member XXL
                    if(text === "Esalta l'energia maschile"){
                      text = "Rafforza il benessere maschile generale";
                    } else if(text === "Sostiene l'energia maschile"){
                      text = "Più energia";
                    } else if(text === "Formula 100% naturale"){
                      text = "100% naturale";
                    }
                    if(text.endsWith('.')){
                      text = text.slice(0, -1);
                    }
                  }
                  return (
                    <li key={index} className="text-sm flex items-start">
                      <Check className="w-4 h-4 text-theme-green mr-1.5 mt-0.5 flex-shrink-0" />
                      <span className="font-medium">{text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-base text-red-600 mb-1">Svantaggi:</h4>
              <ul className="space-y-1.5">
                {product.cons.map((con, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <X className="w-4 h-4 text-red-600 mr-1.5 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-2 text-base">
            <div>
              {product.id === 1 ? (
                <span className="font-bold">{product.effectSpeed}</span>
              ) : product.id === 2 ? (
                <span className="font-bold">Valorizza la Figura Maschile!</span>
              ) : product.id === 3 ? (
                <span className="font-bold">Energia maschile ogni giorno!</span>
              ) : (
                <span><span className="font-semibold">Risultati:</span> {product.effectSpeed}</span>
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-semibold">Prezzo:</span> 
                <div className="ml-1">
                  {product.id === 1 ? (
                    <div className="flex items-center">
                      <span className="text-red-600 line-through text-sm mr-2">82,00€</span>
                      <span className="text-blue-600 font-bold text-lg">49€</span>
                      <Badge variant="destructive" className="ml-2 text-xs py-0.5 px-2">-40%</Badge>
                    </div>
                  ) : product.id === 2 && product.originalPrice ? (
                    <div className="flex items-center">
                      <span className="text-red-600 line-through text-sm mr-2">{product.originalPrice}</span>
                      <span className="text-blue-600 font-bold text-lg">35,32€</span>
                      <Badge className="ml-2 bg-green-500 text-white hover:bg-green-600 text-xs py-1 px-2.5 rounded-full">3x2</Badge>
                    </div>
                  ) : product.id === 3 ? (
                    <div className="flex items-center">
                      <span className="text-red-600 line-through text-sm mr-2">96€</span>
                      <span className="text-blue-600 font-bold text-lg">59,99€</span>
                      <Badge variant="destructive" className="ml-2 text-xs py-0.5 px-2">2x1</Badge>
                    </div>
                  ) : (
                    <span className="text-lg">{product.price}</span>
                  )}
                </div>
              </div>
              {(product.freeShipping || product.id === 3 || product.id === 2) && (
                <div className="flex flex-col mt-1">
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <Truck className="w-4 h-4 mr-1" />
                    <span>
                      {product.id === 1 || product.id === 3
                        ? "Consegna gratuita in tutta Italia" 
                        : "Consegna in Italia e all'Estero"
                      }
                    </span>
                  </div>
                  {product.id === 1 && (
                    <div className="flex items-start text-sm font-semibold mt-1" style={{ color: '#FF3D00' }}>
                      <BoxIcon className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span>Spedizione anonima all'indirizzo che vuoi tu</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        
          <div className="mt-5">
            <Button 
              className={`w-full text-base font-bold py-6 ${recommended ? 'bg-theme-green hover:bg-theme-darkgreen animate-pulse-scale' : 'bg-theme-blue hover:bg-theme-darkblue'}`}
            >
              VAI SUL SITO UFFICIALE ❯
            </Button>
            
            {/* Supporting text below CTA button */}
            <div className="mt-3 text-center">
              <div className="flex items-center justify-center text-green-600 text-sm font-medium">
                <Shield className="w-4 h-4 mr-1" />
                <span>Prodotto Originale Garantito</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
