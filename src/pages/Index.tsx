
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ComparisonTable from '@/components/ComparisonTable';
import ProductInfoCard from '@/components/ProductInfoCard';
import BenefitsSection from '@/components/BenefitsSection';
import ReviewBox from '@/components/ReviewBox';
import CTASection from '@/components/CTASection';
import SupplementsSection from '@/components/SupplementsSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { products, productInfos, reviewGroups, faqItems } from '@/data/productsData';

/**
 * Main landing page for natural male wellness gels comparison
 * 
 * Features:
 * - Responsive design optimized for mobile-first approach
 * - Lazy loading for performance optimization
 * - Smooth scrolling navigation
 * - SEO-optimized structure with semantic HTML
 * - Conversion-optimized layout with multiple CTAs
 * 
 * Performance optimizations:
 * - Memoized components to prevent unnecessary re-renders
 * - Optimized image loading
 * - Efficient data fetching from centralized data source
 */
const Index: React.FC = React.memo(() => {
  /**
   * Smooth scroll navigation to Fluid Power product card
   * Used by hero section CTA to improve user experience
   */
  const scrollToFluidPower = React.useCallback(() => {
    const element = document.getElementById('fluid-power-card');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Fixed navigation header */}
      <Navbar />
      
      {/* Hero section with main value proposition */}
      <HeroSection onScrollToFluidPower={scrollToFluidPower} />

      {/* Product comparison table section - main conversion driver */}
      <section className="section-padding bg-white" aria-labelledby="comparison-heading">
        <div className="container-custom">
          <h2 id="comparison-heading" className="heading-lg text-center mb-8">
            Confronto dei Migliori Gel Naturali per l'Uomo
          </h2>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <ComparisonTable products={products} />
          </div>
        </div>
      </section>

      {/* Detailed product analysis section */}
      <section 
        id="product-analysis" 
        className="section-padding bg-blue-50"
        aria-labelledby="analysis-heading"
      >
        <div className="container-custom">
          <h2 id="analysis-heading" className="heading-lg text-center mb-10">
            Analisi Dettagliata dei Migliori Gel per Uomo
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {productInfos.map((product, index) => (
              <ProductInfoCard
                key={`product-${index}`}
                {...product}
                className="card-hover"
                id={index === 0 ? 'fluid-power-card' : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits explanation section */}
      <BenefitsSection />

      {/* Social proof and reviews section */}
      <section 
        className="section-padding bg-blue-50"
        aria-labelledby="reviews-heading"
      >
        <div className="container-custom">
          <h2 id="reviews-heading" className="heading-lg text-center mb-10">
            Opinioni e Recensioni di Chi ha Già Provato
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {reviewGroups.map((group, index) => (
              <ReviewBox 
                key={`review-group-${index}`} 
                title={group.title} 
                reviews={group.reviews} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Primary call-to-action section */}
      <CTASection />

      {/* Cross-sell supplements section */}
      <SupplementsSection />

      {/* FAQ section for objection handling */}
      <section 
        className="section-padding bg-white"
        aria-labelledby="faq-heading"
      >
        <div className="container-custom">
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Site footer with legal links */}
      <Footer />
    </div>
  );
});

// Set display name for debugging
Index.displayName = 'Index';

export default Index;
