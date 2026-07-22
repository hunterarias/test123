
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ReviewButtonProps {
  className?: string;
}

const ReviewButton: React.FC<ReviewButtonProps> = ({ className = '' }) => {
  const scrollToReviews = () => {
    // Update the target ID to point to the testimonials section
    const testimonialsSection = document.getElementById('testimonials-section');
    testimonialsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToReviews}
      className={`w-full md:w-auto rounded-full bg-white text-[#4464E3] border-2 border-[#4464E3] font-bold py-4 px-10 text-xl flex items-center justify-center hover:bg-gray-100 transition-colors ${className}`}
    >
      LEGGI LE RECENSIONI
    </button>
  );
};

export default ReviewButton;
