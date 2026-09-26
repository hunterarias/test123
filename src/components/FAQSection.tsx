
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Cosa sono gli integratori per l'erezione?",
      answer: "Gli integratori per l'erezione sono prodotti formulati con ingredienti naturali progettati per migliorare la funzione erettile, aumentare la libido e migliorare le prestazioni sessuali negli uomini. Agiscono stimolando la circolazione sanguigna, aumentando i livelli di testosterone e riducendo lo stress, che sono fattori chiave per una buona funzione erettile."
    },
    {
      question: "Come funzionano gli integratori naturali per l'erezione?",
      answer: "Gli integratori naturali per l'erezione funzionano attraverso vari meccanismi. Alcuni aumentano il flusso sanguigno al pene migliorando la produzione di ossido nitrico, che dilata i vasi sanguigni. Altri possono aumentare i livelli di testosterone, l'ormone responsabile della libido maschile. Alcuni ingredienti agiscono anche come adattogeni, riducendo lo stress e l'ansia che possono interferire con la funzione erettile."
    },
    {
      question: "Gli integratori per l'erezione sono sicuri?",
      answer: "Gli integratori naturali per l'erezione sono generalmente sicuri se usati secondo le indicazioni e se contengono ingredienti di qualità. Essendo composti da sostanze naturali, tendono ad avere meno effetti collaterali rispetto ai farmaci sintetici. Tuttavia, è importante scegliere prodotti di aziende affidabili e consultare un medico prima dell'uso, specialmente se si hanno condizioni mediche preesistenti o si assumono altri farmaci."
    },
    {
      question: "Quanto tempo ci vuole perché gli integratori naturali funzionino?",
      answer: "Il tempo necessario varia da persona a persona e dipende dal prodotto specifico. Alcuni integratori possono mostrare risultati in poche ore, mentre altri richiedono un uso regolare per alcune settimane prima di notare miglioramenti significativi. È importante seguire le istruzioni di dosaggio e dare al prodotto il tempo di agire nel sistema."
    },
    {
      question: "Gli integratori per l'erezione possono sostituire i farmaci prescritti?",
      answer: "Gli integratori naturali non sono sostituti dei farmaci prescritti come Viagra o Cialis. Mentre gli integratori possono essere efficaci per problemi lievi o moderati di disfunzione erettile, i casi più gravi potrebbero richiedere intervento medico. È importante consultare un medico per determinare la causa sottostante dei problemi di erezione e il trattamento più appropriato."
    },
    {
      question: "Posso prendere più di un integratore contemporaneamente?",
      answer: "Non è generalmente raccomandato prendere più integratori per l'erezione contemporaneamente senza consulenza medica. Alcuni ingredienti potrebbero interagire tra loro o con farmaci che stai già assumendo. È preferibile provare un prodotto alla volta e valutarne l'efficacia prima di considerare alternative o combinazioni."
    }
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Domande Frequenti</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-700">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
