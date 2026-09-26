
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-wellness-800">{question}</h3>
        <div className="ml-2 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-wellness-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-wellness-500" />
          )}
        </div>
      </button>
      <div
        className={`mt-2 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

interface FAQProps {
  items: FAQItemProps[];
  title?: string;
}

const FAQ: React.FC<FAQProps> = ({ items, title = "Domande Frequenti" }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-wellness-800 mb-6">{title}</h2>
      <div className="space-y-2">
        {items.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
