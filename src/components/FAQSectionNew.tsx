
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSectionNew: React.FC = () => {
  const faqs = [
    {
      question: "Tauro Plus è davvero il migliore integratore per il benessere maschile?",
      answer:
        "Tauro Plus è completo grazie alla sua formula avanzata con ingredienti naturali selezionati. Tuttavia, la scelta dipende dalle tue esigenze personali: se cerchi più energia e performance completa, Tauro Plus potrebbe essere la scelta che fa per te.",
    },
    {
      question: "Quanto tempo ci vuole per vedere i risultati?",
      answer:
        "Alcuni utenti riportano di percepire benefici soggettivi dopo alcune settimane di utilizzo costante. In ogni caso è consigliabile seguire le istruzioni riportate sull'etichetta del prodotto",
    },
    {
      question: "Gli integratori naturali hanno effetti collaterali?",
      answer:
        "gli integratori naturali formulati per il benessere maschili non comportano rischi e sono ben tollerati",
    },
    {
      question: "La spedizione è discreta?",
      answer:
        "Assolutamente sì. Comprendiamo l'importanza della privacy per i nostri clienti. Tutte le spedizioni vengono effettuate in pacchi completamente anonimi, senza alcun riferimento al contenuto o al nome del prodotto. Sulla confezione esterna apparirà solo l'indirizzo di consegna e un mittente generico.",
    },
    {
      question: "A cosa serve Tauro Plus?",
      answer:
        "L'integratore Tauro Plus contribuisce al benessere dell'uomo, favorendo energia e vitalità maschile e sostenendo uno stile di vita attivo",
    },
    {
      question: "Tauro Plus si compra in farmacia?",
      answer:
        "No, Tauro Plus è disponibile esclusivamente tramite il sito ufficiale. Potenzamaschile.net collabora con i siti ufficiali dei produttori per indirizzare all'acquisto del prodotto originale in modo semplice e sicuro.",
    },
    {
      question: "Tauro Plus è un integratore naturale?",
      answer:
        "Sì, Tauro Plus è formulato con ingredienti di origine naturale ed è pensato per supportare il benessere maschile in modo equilibrato.",
    },
    {
      question: "Qual è il prezzo di Tauro Plus?",
      answer:
        "Tauro Plus è attualmente disponibile con una promozione che offre il 40% di sconto. L'offerta è valida per un periodo limitato e fino a esaurimento scorte.",
    },
    {
      question: "Blue Bull integratore a cosa serve?",
      answer:
        "Blue Bull è un integratore con ingredienti di origine naturale, pensato per supportare il benessere generale dell'uomo, l'energia e la vitalità nell'ambito di uno stile di vita sano.",
    },
    {
      question: "La promozione di Blue Bull è sempre attiva?",
      answer:
        "No, al momento è disponibile una promozione 2x1 valida per un periodo limitato e fino a esaurimento scorte. Blue Bull può essere ordinato solo tramite il sito ufficiale del produttore. Potenzamaschile.net collabora con i siti ufficiali per garantire un acquisto sicuro e semplice.",
    },
    {
      question: "Tauro Plus dove si compra?",
      answer:
        "Il prodotto può essere acquistato dal sito ufficiale del produttore. Potenzamaschile.net offre link sicuri per acquistare il prodotto originale in modo semplice e affidabile.",
    },
    {
      question: "Come si ordina XXL Member?",
      answer:
        "Member XXL è disponibile tramite il sito ufficiale del produttore. Potenzamaschile.net consente di completare l'ordine in pochi clic e ricevere il prodotto originale comodamente a casa.",
    },
    {
      question: "È possibile ordinare MemberXXL dall'estero?",
      answer:
        "Sì, l'azienda produttrice offre spedizioni internazionali, consentendo l'acquisto in diversi paesi del mondo.",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 id="domande-frequenti" className="text-3xl font-bold mb-10 text-center">FAQ - Domande Frequenti</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b">
              <AccordionTrigger className="text-left font-medium py-5 text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-5">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSectionNew;
