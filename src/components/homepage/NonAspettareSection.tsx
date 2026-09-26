
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import React from "react";

const NonAspettareSection = () => {
  const topProduct = [...products].sort((a, b) => b.rating - a.rating)[0];

  let topProductUrl = topProduct.link;
  if (topProduct.name === "Blue Bull") topProductUrl = "https://www.trackflow.it/scripts/click.php?a_aid=pm&a_bid=ab9c055d&data1=gclidxyz&data2=UY0&data3=bluebull";
  else if (topProduct.name === "Tauro Plus") topProductUrl = "https://www.trackflow.it/scripts/click.php?a_aid=pm&a_bid=8c93cc10&data1=gclidxyz&data2=UXZ&data3=tauro-plus";
  else if (topProduct.name === "Member XXL") topProductUrl = "https://www.trackflow.it/scripts/click.php?a_aid=pm&a_bid=ea983a67&data1=gclidxyz&data2=k8f0mxC1&data3=memberxxl";

  return (
    <section id="non-aspettare" className="text-center mb-8">
      <h2 id="ordinaora" className="text-2xl font-bold mb-4">Non Aspettare Oltre!</h2>
      <p className="mb-6">Scopri la nostra migliore scelta per il benessere maschile</p>
      <a 
          href={topProductUrl} 
          rel="noopener noreferrer nofollow"
        ><Button className="w-full md:w-auto bg-theme-red hover:bg-red-700 text-lg py-6 px-8">
        
          ORDINA TAURO PLUS ❯
       
      </Button>
         </a>
    </section>
  );
};

export default NonAspettareSection;
