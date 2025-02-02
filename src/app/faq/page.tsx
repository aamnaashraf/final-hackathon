"use client";
import Image from "next/image";
import Link from "next/link";

import AdditionalSection from "@/components/AdditionalSection";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  { question: "Do you offer custom furniture designs?", answer: "Yes! We offer custom designs tailored to your needs. Contact us for more details." },
  { question: "What materials do you use for your furniture?", answer: "We use high-quality wood, metal, and premium upholstery to ensure durability and style." },
  { question: "Do you provide home delivery?", answer: "Yes, we offer home delivery across the country. Shipping charges may vary based on location." },
  { question: "Can I return or exchange an item?", answer: "Yes, returns and exchanges are accepted within 30 days, provided the item is unused and in original condition." },
  { question: "How can I track my order?", answer: "Once your order is shipped, you will receive a tracking number via email or SMS." },
  { question: "Do you provide installation services?", answer: "Yes, we offer installation services for selected products. Contact us for details." },
  { question: "Are there any warranties on furniture items?", answer: "Yes, all our furniture comes with a warranty of 1 year. Extended warranties are also available." },
  { question: "Do you offer EMI or installment options?", answer: "Yes, we offer EMI options through selected banks. Check our payment page for details." },
  { question: "How long does it take to deliver furniture?", answer: "Delivery times vary based on your location and product availability. Typically, it takes 5-10 business days." },
  { question: "Can I customize the color of my furniture?", answer: "Yes, we offer a range of color options for most of our furniture. Contact us for customization details." },
  { question: "Do you have a showroom where I can see the furniture?", answer: "Yes, we have multiple showrooms across the country. Visit our 'Locations' page for addresses." },
  { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, net banking, UPI, and cash on delivery." },
  { question: "Do you offer discounts for bulk orders?", answer: "Yes, we provide special discounts for bulk orders. Contact our sales team for more information." },
  { question: "How do I care for my furniture?", answer: "We provide a care guide with every purchase. You can also find tips on our website's 'Care & Maintenance' section." },
  { question: "Can I cancel my order after placing it?", answer: "Yes, you can cancel your order within 24 hours of placing it. Contact our support team for assistance." },
  { question: "Do you offer international shipping?", answer: "Currently, we only ship within the country. International shipping options may be available in the future." }, // Added 16th question
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
<div>
    <header className="relative bg-white shadow-md pt-16">
    <div className="absolute inset-0">
      <Image
        src="/bg image 2.png"
        alt="Shop Background"
        fill
        className="object-cover"
      />
    </div>
    <div className="relative container mx-auto px-4 py-8 text-center">
      <div className="flex justify-center mb-2">
        <Image
          src="/logo.png"
          alt="Shop Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <h1 className="text-4xl font-bold text-black">Faq</h1>
      <p className="text-black text-sm">
        <Link href="/" className="hover:text-black text-bold">
          Home
        </Link>{' '}
        &gt; Faq
      </p>
    </div>
  </header>

    <div className="min-h-screen py-12 px-6 lg:px-24 bg-gradient-to-b from-beige-100 to-beige-50">
      <h1 className="text-4xl font-bold text-center text-gray-800  mb-12 font-serif">
        Frequently Asked Questions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-yellow-100 hover:bg-yellow-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-5 px-6 text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              <FaChevronDown
                className={`text-gray-600 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-600 bg-beige-50 rounded-b-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <br></br>


    </div>
    </div>
  );
};

export default FAQPage;
