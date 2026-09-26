/**
 * Product data for comparison table and detailed analysis
 * Centralized data structure for better maintainability
 */

export interface Product {
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
}

export interface ProductInfo {
  title: string;
  slogan: string;
  introduction: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
  packaging: string;
  experience: {
    offerDetails: {
      title: string;
      price: string;
      discount: string;
      shipping: string;
      guarantee: string;
    }
  };
  testimonials: {
    quotes: Array<{
      text: string;
      author: string;
      age?: number;
    }>;
  };
  whereToBuy: string;
  image: string;
  rating: number;
  promoLabel?: string;
  affiliateLink: string;
}

export interface Review {
  name: string;
  rating: number;
  date: string;
  product: string;
  text: string;
}

export interface ReviewGroup {
  title: string;
  reviews: Review[];
}

export const products: Product[] = [
  {
    name: "Tauro Gel",
    rating: 5,
    image: "/lovable-uploads/e28dc2d8-a910-4b9d-aa0d-e2f6cdad230d.png",
    ingredients: ["Maca Peruviana", "Cardo Mariano", "Elastina"],
    benefits: ["Più vitalità", "Più controllo", "Più resistenza"],
    usage: "Applicare una piccola quantità di prodotto due volte al giorno, a completo assorbimento.",
    pros: ["Formula naturale al 100%", "Rapido assorbimento", "Nessun odore"],
    cons: ["Spesso esaurito", "Solo acquisto online"],
    price: "€49,00",
    promotion: "40% di sconto",
    affiliateLink: "https://click.potenzamaschile.net/?pm=10115&TLPageName=potenzamaschile|click|V2Y|w796&sv1=gclidxyz&sv2=pm&sv3=tauro_gel&sv4=w796&sv5=V2Y&sv6=acquisto-4&type=9"
  },
  {
    name: "Fluid Power",
    rating: 5,
    image: "/lovable-uploads/cffe07a9-5b41-4557-9d17-54f1c4c697af.png",
    ingredients: ["A base di pura maca peruviana ad alta concentrazione"],
    benefits: ["Energizzante", "Tonificante", "Elasticizzante", "Rinfrescante", "Sensibilizzante"],
    usage: "Applicare con un delicato massaggio una volta al giorno per favorire la naturale vitalità.",
    pros: ["Formula avanzata", "Assorbimento Rapido", "Texture leggera"],
    cons: ["Scorte limitate", "Non sempre in promo"],
    price: "2X€49,99",
    promotion: "2 al prezzo di 1",
    promoLabel: "SOLO OGGI 2X1",
    affiliateLink: "https://click.potenzamaschile.net/?pm=10115&TLPageName=potenzamaschile|click|V2Z|w2051&sv1=gclidxyz&sv2=pm&sv3=fluidpower_2x49&sv4=w2051&sv5=V2Z&sv6=acquisto-4&type=9"
  },
  {
    name: "Expansil Cream",
    rating: 4,
    image: "/lovable-uploads/7fa2f8c5-c236-40fe-a22f-0f51b5fc14b4.png",
    ingredients: ["Ginkgo Biloba", "Menta piperita", "Macerato di arnica"],
    benefits: ["Più presenza maschile", "Più vitalità", "Più sensibilità"],
    usage: "Applicare una noce di prodotto massaggiando delicatamente fino a completo assorbimento, una volta al giorno.",
    pros: ["Formula innovativa", "Texture non grassa", "Odore delicato"],
    cons: ["Prezzo più alto", "Disponibilità limitata"],
    price: "€49.99",
    promotion: "Promo su multipack",
    affiliateLink: "https://click.potenzamaschile.net/?pm=10115&TLPageName=potenzamaschile|click|e85177h9|n56&sv1=gclidxyz&sv2=pm&sv3=expansil&sv4=n56&sv5=e85177h9&sv6=it&type=9"
  }
];

export const productInfos: ProductInfo[] = [
  {
    title: "Scheda Informativa: Tauro Gel",
    slogan: "La vitalità di cui hai bisogno",
    introduction: "Tauro Gel è un prodotto per il benessere maschile a base di ingredienti naturali, formulato per supportare la vitalità e l'energia dell'uomo moderno. La sua formula combina estratti vegetali tradizionalmente utilizzati per migliorare il benessere maschile.",
    ingredients: [
      "Maca Peruviana: radice peruviana nota per supportare l'energia e la vitalità",
      "Cardo Mariano: pianta utilizzata nella medicina tradizionale per il benessere maschile",
      "Elastina: proteina che supporta l'elasticità dei tessuti"
    ],
    benefits: [
      "<strong style='color: black;'>Più vitalità</strong>: contribuisce a migliorare la vitalità quotidiana",
      "<strong style='color: black;'>Più controllo</strong>: può supportare i livelli di energia",
      "<strong style='color: black;'>Più resistenza</strong>: formulato per favorire il benessere intimo maschile"
    ],
    usage: "Applicare una piccola quantità di prodotto due volte al giorno, a completo assorbimento.",
    packaging: "Flacone in plastica discreto e compatto, ideale anche per viaggiare.",
    experience: {
      offerDetails: {
        title: "Cosa comprende l'offerta di oggi",
        price: "€49,00",
        discount: "- 40%",
        shipping: "Gratuita e Veloce",
        guarantee: "Ordine sicuro tramite il sito ufficiale"
      }
    },
    testimonials: {
      quotes: [
        {
          text: "Ho provato Tauro Gel dopo aver letto tutte le informazioni su questo sito. Mi ha aiutato a sentirmi più in sintonia con me stesso. Ho ritrovato il mio benessere maschile.",
          author: "Fabrizio M.",
          age: 41
        },
        {
          text: "Ho deciso di provare Tauro Gel. Mi fa sentire sicuro e pronto nel mio benessere. Mi sento di consigliarlo",
          author: "Carlo B.",
          age: 55
        }
      ]
    },
    whereToBuy: "Tauro Gel è disponibile esclusivamente sul sito ufficiale del produttore per garantire l'autenticità e la qualità del prodotto. È importante acquistare solo dai canali ufficiali per evitare imitazioni.",
    image: "/lovable-uploads/c913123b-e5d5-488a-ab5e-31866c75c0e7.png",
    rating: 5,
    affiliateLink: "https://click.potenzamaschile.net/?pm=10115&TLPageName=potenzamaschile|click|V2Y|w796&sv1=gclidxyz&sv2=pm&sv3=tauro_gel&sv4=w796&sv5=V2Y&sv6=acquisto-4&type=9"
  },
  {
    title: "Scheda Informativa: Fluid Power",
    slogan: "La forza che stai cercando",
    introduction: "Fluid Power è un gel formulato con ingredienti naturali selezionati per supportare il benessere e la vitalità maschile. La sua composizione bilanciata è pensata per l'energia e la fiducia nell'uomo moderno attraverso principi attivi di origine vegetale.",
    ingredients: [
      "A base di pura maca peruviana ad alta concentrazione: potente estratto naturale che supporta l'energia e la vitalità maschile"
    ],
    benefits: [
      "<strong style='color: black;'>Energizzante</strong>: energia quotidiana maschile",
      "<strong style='color: black;'>Tonificante</strong>: pelle tonica e rivitalizzata",
      "<strong style='color: black;'>Elasticizzante</strong>: tessuti più elastici",
      "<strong style='color: black;'>Rinfrescante</strong>: sensazione di freschezza alla pelle",
      "<strong style='color: black;'>Sensibilizzante</strong>: offre una sensazione di sensibilità alla pelle"
    ],
    usage: "Applicare con un delicato massaggio una volta al giorno per favorire la naturale vitalità.",
    packaging: "Tubo ergonomico con applicatore facilitato. Il design discreto è stato studiato per facilitarne l'uso e la conservazione.",
    experience: {
      offerDetails: {
        title: "Cosa comprende l'offerta di oggi",
        price: "2X€49,99",
        discount: "2 al prezzo di 1",
        shipping: "Gratuita e Veloce",
        guarantee: "Ordine sicuro tramite il sito ufficiale"
      }
    },
    testimonials: {
      quotes: [
        {
          text: "Sto usando Fluid Power da alcune settimane come parte della mia routine quotidiana. L'ho trovato utile e piacevole da applicare, e mi ha aiutato a sentirmi più in sintonia con me stesso.",
          author: "Marco L.",
          age: 39
        },
        {
          text: "Ho deciso di provare Fluid Power su consiglio di un amico. È diventato un piccolo rituale personale che mi fa sentire più curato e presente nel mio benessere.",
          author: "Antonio G.",
          age: 52
        }
      ]
    },
    whereToBuy: "Fluid Power è acquistabile sul sito ufficiale del produttore, dove sono spesso disponibili promozioni esclusive. L'azienda consiglia di diffidare da rivenditori non autorizzati per garantire l'originalità del prodotto.",
    image: "/lovable-uploads/cffe07a9-5b41-4557-9d17-54f1c4c697af.png",
    rating: 5,
    promoLabel: "SOLO OGGI 2X1",
    affiliateLink: "https://click.potenzamaschile.net/?pm=10115&TLPageName=potenzamaschile|click|V2Z|w2051&sv1=gclidxyz&sv2=pm&sv3=fluidpower_2x49&sv4=w2051&sv5=V2Z&sv6=acquisto-4&type=9"
  },
  {
    title: "Scheda Informativa: Expansil Cream",
    slogan: "Più presenza maschile",
    introduction: "Expansil Cream è una crema innovativa per il benessere maschile che combina ingredienti e principi attivi naturali. Formulata per sostenere la vitalità e migliorare il benessere maschile, si distingue per l'uso di estratti vegetali rari.",
    ingredients: [
      "Ginkgo Biloba: estratto naturale con proprietà benefiche per la circolazione",
      "Menta piperita: erba nota per le sue proprietà stimolanti",
      "Macerato di arnica: estratto naturale con proprietà tonificanti"
    ],
    benefits: [
      "<strong style='color: black;'>Più presenza maschile</strong>: formulato per sostenere la presenza maschile",
      "<strong style='color: black;'>Più vitalità</strong>: contribuisce all'energia e la vitalità",
      "<strong style='color: black;'>Più sensibilità</strong>: supporta la sensibilità e la percezione"
    ],
    usage: "Applicare una noce di crema sulla zona interessata con un delicato massaggio fino a completo assorbimento.",
    packaging: "Barattolo dal design elegante e discreto permette di conservare il prodotto in modo pratico mantenendone l'efficacia.",
    experience: {
      offerDetails: {
        title: "Cosa comprende l'offerta di oggi",
        price: "€49,99",
        discount: "Promo sui Multipack",
        shipping: "Veloce anche all'estero",
        guarantee: "Ordine sicuro tramite il sito ufficiale"
      }
    },
    testimonials: {
      quotes: [
        {
          text: "Ho ordinato Expansil Cream perchè volevo ancora più presenza maschile. Beh devo dire che funziona.",
          author: "Edo F.",
          age: 31
        },
        {
          text: "Ho deciso di provare Expansil Cream perchè volevo ancora di più anche se ero scettico. Mi sono ricreduto. Ottimo prodotto",
          author: "Leonardo C.",
          age: 42
        }
      ]
    },
    whereToBuy: "Expansil Cream è disponibile esclusivamente attraverso il sito ufficiale del produttore che garantisce la freschezza e l'autenticità del prodotto. Si consiglia di acquistare solo dai canali ufficiali per beneficiare anche delle garanzie offerte.",
    image: "/lovable-uploads/a79d3bf4-da1f-4621-a8f4-6b0bc5c12f32.png",
    rating: 4,
    affiliateLink: "https://click.potenzamaschile.net/?pm=10115&TLPageName=potenzamaschile|click|e85177h9|n56&sv1=gclidxyz&sv2=pm&sv3=expansil&sv4=n56&sv5=e85177h9&sv6=it&type=9"
  }
];

export const reviewGroups: ReviewGroup[] = [
  {
    title: "Recensioni Tauro Gel",
    reviews: [
      {
        name: "Marco B.",
        rating: 5,
        date: "",
        product: "Tauro Gel",
        text: "Uso Tauro Gel da circa due mesi e sono molto soddisfatto dei risultati. La mia energia è notevolmente migliorata e mi sento più sicuro di me stesso."
      },
      {
        name: "Luigi S.",
        rating: 5,
        date: "",
        product: "Tauro Gel",
        text: "Ottimo prodotto, assorbimento rapido e nessun odore sgradevole. Lo consiglio vivamente a chi cerca un prodotto naturale per il benessere maschile."
      },
      {
        name: "Andrea P.",
        rating: 4,
        date: "",
        product: "Tauro Gel",
        text: "All'inizio ero scettico, ma dopo un mese di utilizzo ho notato un significativo miglioramento. La spedizione è stata veloce e discreta."
      },
      {
        name: "Roberto V.",
        rating: 5,
        date: "",
        product: "Tauro Gel",
        text: "Prodotto eccellente, ha superato le mie aspettative. La mia compagna ha notato la differenza e siamo entrambi più felici."
      }
    ]
  },
  {
    title: "Recensioni Fluid Power",
    reviews: [
      {
        name: "Fabio M.",
        rating: 4,
        date: "",
        product: "Fluid Power",
        text: "Buon prodotto con un buon rapporto qualità-prezzo. Ho notato miglioramenti dopo circa tre settimane di uso costante."
      },
      {
        name: "Davide R.",
        rating: 3,
        date: "",
        product: "Fluid Power",
        text: "Discreto, si assorbe rapidamente ma i risultati sono arrivati un po' più lentamente rispetto a quanto mi aspettassi."
      },
      {
        name: "Paolo G.",
        rating: 5,
        date: "",
        product: "Fluid Power",
        text: "Molto soddisfatto dell'acquisto. Consegna rapida e prodotto efficace. Lo ricomprerò sicuramente."
      },
      {
        name: "Luca N.",
        rating: 4,
        date: "",
        product: "Fluid Power",
        text: "Buona formula, non lascia residui e si assorbe bene. I risultati sono stati gradualmente visibili dopo l'uso costante."
      }
    ]
  },
  {
    title: "Recensioni Expansil Cream",
    reviews: [
      {
        name: "Antonio B.",
        rating: 4,
        date: "",
        product: "Expansil Cream",
        text: "Texture molto piacevole e facile da applicare. Gli ingredienti esotici sembrano fare la differenza!"
      },
      {
        name: "Simone T.",
        rating: 4,
        date: "",
        product: "Expansil Cream",
        text: "Buon prodotto, anche se il prezzo è un po' elevato. Apprezzo molto la qualità degli ingredienti naturali."
      },
      {
        name: "Matteo D.",
        rating: 5,
        date: "",
        product: "Expansil Cream",
        text: "Ottima crema, si sente subito la differenza. Il benessere generale è migliorato significativamente."
      },
      {
        name: "Francesco P.",
        rating: 3,
        date: "",
        product: "Expansil Cream",
        text: "Prodotto interessante, ma ci vuole costanza nell'utilizzo per vedere risultati concreti. La confezione è elegante e discreta."
      }
    ]
  }
];

export const faqItems = [
  {
    question: "Quanto tempo serve per notare i benefici?",
    answer: "I tempi possono variare da persona a persona.Per risultati ottimali, si consiglia di utilizzare i prodotti regolarmente secondo le istruzioni È importante ricordare che i risultati dipendono da molti fattori individuali come l'età, lo stile di vita e le condizioni di salute generali."
  },
  {
    question: "Perché è meglio utilizzare gel per uomo naturali?",
    answer: "I gel naturali offrono diversi vantaggi rispetto ai prodotti con ingredienti sintetici. Contengono sostanze derivate da piante e minerali che tendono ad essere più delicate sulla pelle e possono ridurre il rischio di irritazioni o reazioni allergiche. Gli ingredienti naturali spesso lavorano in sinergia con il corpo, supportando i processi fisiologici naturali invece di forzarli."
  },
  {
    question: "La consegna dei prodotti è veloce? E' Discreta?",
    answer: "Sì, tutti i prodotti presentati vengono spediti in modo rapido, solitamente entro 24-48 ore dall'ordine. La consegna è sempre discreta, con pacchi neutri che non rivelano il contenuto all'esterno. Non viene mai menzionato il nome del prodotto o il tipo di articolo sull'etichetta o sul pacco. Questo garantisce la massima privacy per l'acquirente."
  },
  {
    question: "Qual è il gel più popolare per il benessere maschile?",
    answer: "Tra i prodotti analizzati, Tauro Gel risulta essere il più apprezzato dagli utenti, con il maggior numero di recensioni positive e il più alto tasso di riacquisto. La sua popolarità è dovuta alla formula completamente naturale, e al gradimento riportato dagli utenti. Tuttavia, è importante sottolineare che la scelta del prodotto migliore dipende dalle esigenze individuali e dalle preferenze personali. Ciascun prodotto ha caratteristiche diverse che potrebbero renderlo più adatto a specifiche necessità."
  }
];
