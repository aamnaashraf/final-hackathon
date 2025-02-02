"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Do you offer custom furniture designs?",
    answer: "Yes! We offer custom designs tailored to your needs. Contact us for more details.",
  },
  {
    question: "What materials do you use for your furniture?",
    answer: "We use high-quality wood, metal, and premium upholstery to ensure durability and style.",
  },
  {
    question: "Do you provide home delivery?",
    answer: "Yes, we offer home delivery across the country. Shipping charges may vary based on location.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-12 px-6 lg:px-24">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-md text-left hover:bg-gray-50 transition"
            >
              <span className="text-lg font-medium text-gray-700">{faq.question}</span>
              <FaChevronDown
                className={`text-gray-600 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 py-3 text-gray-600 bg-white border-l-4 border-gray-500">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => router.push("/faq")}
          className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-900 transition"
        >
          View More FAQs
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
