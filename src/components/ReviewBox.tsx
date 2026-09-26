
import React from 'react';
import StarRating from './StarRating';

interface ReviewProps {
  name: string;
  rating: number;
  date: string;
  text: string;
  product: string;
}

const Review: React.FC<ReviewProps> = ({ name, rating, date, text, product }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-2">
        <div className="font-semibold text-wellness-800">{name}</div>
        <div className="text-xs text-gray-500">{date}</div>
      </div>
      <div className="flex items-center mb-2">
        <StarRating rating={rating} size="sm" />
        <span className="ml-2 text-xs text-gray-600">{product}</span>
      </div>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );
};

interface ReviewBoxProps {
  title: string;
  reviews: ReviewProps[];
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ title, reviews }) => {
  return (
    <div className="bg-wellness-50 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4 text-wellness-800">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewBox;
