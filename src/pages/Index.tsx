import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/homepage/Header';
import MiglioriIntegratoriUomoSection from '@/components/homepage/MiglioriIntegratoriUomoSection';
import PercheSceglierSection from '@/components/homepage/PercheSceglierSection';
import RecensioniSection from '@/components/homepage/RecensioniSection';
import BenessereMaschileSection from '@/components/homepage/BenessereMaschileSection';

// Lazy load below-the-fold sections for better initial page load performance
const FAQSection = lazy(() => import('@/components/homepage/FAQSection'));
const NonAspettareSection = lazy(() => import('@/components/homepage/NonAspettareSection'));
const IngredientiSection = lazy(() => import('@/components/homepage/IngredientiSection'));
const Footer = lazy(() => import('@/components/homepage/Footer'));
const BackToTopButton = lazy(() => import('@/components/homepage/BackToTopButton'));

const SectionLoader: React.FC = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Caricamento...</div>
  </div>
);

const faqs = [
  { q: "Tauro Plus è davvero il migliore integratore per il benessere maschile?", a: "Tauro Plus è completo grazie alla sua formula avanzata con ingredienti naturali selezionati. Tuttavia, la scelta dipende dalle tue esigenze personali: se cerchi più energia e performance completa, Tauro Plus potrebbe essere la scelta che fa per te." },
  { q: "Quanto tempo ci vuole per vedere i risultati?", a: "Alcuni utenti riportano di percepire benefici soggettivi dopo alcune settimane di utilizzo costante. In ogni caso è consigliabile seguire le istruzioni riportate sull'etichetta del prodotto" },
  { q: "Gli integratori naturali hanno effetti collaterali?", a: "gli integratori naturali formulati per il benessere maschili non comportano rischi e sono ben tollerati" },
  { q: "La spedizione è discreta?", a: "Assolutamente sì. Tutte le spedizioni vengono effettuate in pacchi completamente anonimi, senza alcun riferimento al contenuto o al nome del prodotto." },
  { q: "A cosa serve Tauro Plus?", a: "L'integratore Tauro Plus contribuisce al benessere dell'uomo, favorendo energia e vitalità maschile e sostenendo uno stile di vita attivo" },
  { q: "Tauro Plus si compra in farmacia?", a: "No, Tauro Plus è disponibile esclusivamente tramite il sito ufficiale del produttore." },
  { q: "Tauro Plus è un integratore naturale?", a: "Sì, Tauro Plus è formulato con ingredienti di origine naturale ed è pensato per supportare il benessere maschile in modo equilibrato." },
  { q: "Qual è il prezzo di Tauro Plus?", a: "Tauro Plus è attualmente disponibile con una promozione che offre il 40% di sconto, per un periodo limitato e fino a esaurimento scorte." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const Index: React.FC = () => (
  <>
    <Helmet>
      <title>Migliori integratori Naturali per il Vigore Maschile</title>
      <meta
        name="description"
        content="Confronto dei migliori integratori naturali per il benessere maschile: ingredienti, efficacia e consigli per una scelta consapevole."
      />
      <meta name="keywords" content="integratori naturali, vigore maschile, benessere uomo, integratori erezione" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="canonical" href="https://integratori-potenzamaschile.lovable.app/" />

      <meta property="og:title" content="Migliori integratori Naturali per il Vigore Maschile" />
      <meta property="og:description" content="Confronto dei migliori integratori naturali per il benessere maschile." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://integratori-potenzamaschile.lovable.app/" />
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>

    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <MiglioriIntegratoriUomoSection />

        <div className="max-w-6xl mx-auto px-4 py-12">
          <RecensioniSection />
          <PercheSceglierSection />
          <BenessereMaschileSection />

          <Suspense fallback={<SectionLoader />}>
            <FAQSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <NonAspettareSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <IngredientiSection />
          </Suspense>
        </div>
      </main>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <BackToTopButton />
      </Suspense>
    </div>
  </>
);

export default Index;
