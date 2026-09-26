
import React from 'react';
import InfoBox from './InfoBox';

/**
 * Benefits section explaining advantages of natural gels
 * Uses InfoBox components to display key benefits
 */
const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Ingredienti Naturali",
      variant: "blue" as const,
      content: "I gel con ingredienti naturali offrono un approccio più delicato ma di supporto al benessere maschile. Estratti vegetali come Maca, Tribulus e Ginseng, utilizzati da secoli nelle medicine tradizionali, lavorano in armonia con il corpo senza introdurre sostanze chimiche aggressive."
    },
    {
      title: "Benessere Maschile",
      variant: "light" as const,
      content: "Il benessere maschile comprende energia, vitalità e fiducia in se stessi. I gel naturali sono formulati specificamente per supportare questi aspetti, contribuendo a migliorare la qualità della vita quotidiana e le relazioni interpersonali."
    },
    {
      title: "Energia e Vitalità Maschile",
      variant: "blue" as const,
      content: "La vitalità maschile tende naturalmente a diminuire con l'età o a causa dello stress quotidiano. Gli ingredienti attivi presenti nei gel naturali possono aiutare a contrastare questi effetti, supportando l'energia fisica e mentale per affrontare le sfide quotidiane."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-10">
          Perché Scegliere Gel Naturali per il Benessere Maschile
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <InfoBox key={index} title={benefit.title} variant={benefit.variant}>
              <p>{benefit.content}</p>
            </InfoBox>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
