import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import ProductComparisonCards from '@/components/ProductComparisonCards';
import { products } from "@/data/products";

const productReviews = [
  {
    productName: "Tauro Plus Recensioni",
    reviews: [
      {
        name: "Marco B.",
        rating: 5,
        productTag: "Tauro Plus",
        text: "Ho iniziato a usare Tauro Plus da circa due mesi e la mia esperienza è stata positiva. Ho percepito una maggiore energia nei momenti in cui ne avevo bisogno e mi sento più sicuro di me stesso. All'inizio ero scettico, ma sono soddisfatto del prodotto."
      },
      {
        name: "Luigi S.",
        rating: 5,
        productTag: "Tauro Plus", 
        text: "Tauro Plus mi è sembrato un prodotto naturale valido per il benessere maschile. Personalmente ho apprezzato l'effetto di ritrovata vitalità e non ho riscontrato particolari problemi durante l'utilizzo."
      },
      {
        name: "Andrea P.",
        rating: 4,
        productTag: "Tauro Plus",
        text: "Dopo un mese di utilizzo, ho avuto una buona impressione del prodotto. A volte integrare alcuni ingredienti naturali può fare la differenza nel proprio equilibrio personale. Lo consiglio a chi cerca un supporto naturale."
      },
      {
        name: "Roberto V.",
        rating: 5,
        productTag: "Tauro Plus",
        text: "Sono rimasto soddisfatto dalla qualità di Tauro Plus. Mi ha dato un buon supporto nel mio percorso personale, superando le mie aspettative iniziali."
      }
    ]
  },
  {
    productName: "Blue Bull Recensioni",
    reviews: [
      {
        name: "Fabio M.",
        rating: 5,
        productTag: "Blue Bull",
        text: "Ammetto di essere stato inizialmente scettico, ma la mia esperienza con Blue Bull è stata positiva. Mi sento più energico e nel complesso ho percepito un miglior benessere. È un prodotto che consiglio volentieri, in base alla mia esperienza personale."
      },
      {
        name: "Davide R.",
        rating: 5,
        productTag: "Blue Bull",
        text: "Ho iniziato a notare dei benefici dopo un utilizzo costante. Mi sento più in forma e con una buona energia. Ogni persona è diversa, ma nel mio caso posso dire di essere soddisfatto."
      },
      {
        name: "Paolo G.",
        rating: 5,
        productTag: "Blue Bull",
        text: "Molto soddisfatto dell'acquisto. Consegna veloce, ottimo rapporto qualità-prezzo. Dopo alcune settimane ho notato più energia. Continuerò sicuramente a usarlo."
      },
      {
        name: "Luca N.",
        rating: 4,
        productTag: "Blue Bull",
        text: "Buona formula! I risultati sono stati gradualmente visibili dopo l'uso costante. Prodotto di qualità!"
      }
    ]
  },
  {
    productName: "Member XXL Recensioni",
    reviews: [
      {
        name: "Antonio B.",
        rating: 4,
        productTag: "Member XXL",
        text: "Ho provato Member XXL con curiosità, nonostante lo scetticismo iniziale. La formula con ingredienti naturali mi è sembrata valida, e ho avuto una buona esperienza personale. Lo considero un supporto interessante."
      },
      {
        name: "Simone T.",
        rating: 5,
        productTag: "Member XXL",
        text: "Buon prodotto, anche se il prezzo è un po' elevato. Apprezzo molto la qualità degli ingredienti naturali."
      },
      {
        name: "Matteo D.",
        rating: 5,
        productTag: "Member XXL",
        text: "Sono rimasto soddisfatto dall'esperienza con Member XXL. Dopo qualche settimana di utilizzo ho percepito una maggiore energia e benessere generale. Apprezzo anche la discrezione nella spedizione."
      },
      {
        name: "Francesco P.",
        rating: 3,
        productTag: "Member XXL",
        text: "Ho trovato Member XXL interessante. L'ho utilizzato con continuità e ho apprezzato l'approccio naturale. La confezione è curata e discreta."
      }
    ]
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="py-8 bg-[#f0f7ff]">
      <h2 id="recensioni-clienti" className="text-2xl font-bold mb-8 text-center">Cosa Dicono I Nostri Clienti</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {productReviews.map((product, productIndex) => (
          <div key={productIndex} className="space-y-4">
            <h3 
              id={productIndex === 0 ? "recensioni-tauro-plus" : productIndex === 1 ? "recensioni-blue-bull" : "recensioni-member-xxl"} 
              className="text-lg font-semibold text-center text-[#1e40af] mb-4"
            >
              {product.productName}
            </h3>
            
            <div className="space-y-4">
              {product.reviews.map((review, reviewIndex) => (
                <Card key={reviewIndex} className="bg-white border border-gray-200 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{review.name}</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {review.productTag}
                      </span>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className={`w-3 h-3 ${starIndex < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {review.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <ProductComparisonCards products={products} />
      </div>
    </div>
  );
};

export default TestimonialSection;
