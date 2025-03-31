'use client';
import React, { useState } from "react";

const faqs = [
  { question: "What credit score ?", answer: ":)" },
  { question: " How can I apply for ?", answer: ":)" },
  { question: "Are there any annual fees ?", answer: ":)" },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto mt-10 p-4 md:p-6 rounded-lg shadow-lg z-30">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2 md:space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="p-2 md:p-4 rounded-lg shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-base md:text-lg font-medium"
            >
              {faq.question}
              <span className="text-gray-500">{openIndex === index ? "−" : "+"}</span>
            </button>
            <div
              className={`mt-1 md:mt-2 text-gray-700 transition-all duration-300 ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
