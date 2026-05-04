import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How fast is your delivery service?",
            answer: "We deliver parcels within 24–72 hours in major cities. Express delivery available in Dhaka within 4–6 hours."
        },
        {
            question: "Do you offer cash on delivery?",
            answer: "Yes, we offer 100% cash on delivery anywhere in Bangladesh with guaranteed safety."
        },
        {
            question: "How can I track my parcel?",
            answer: "You can track your parcel in real-time using our tracking system with your tracking number."
        },
        {
            question: "What areas do you cover?",
            answer: "We provide nationwide delivery services covering all 64 districts of Bangladesh."
        }
    ];

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-primary mb-3">Frequently Asked Question(FAQ)</h2>
                    <p className='text-gray-400 pb-2'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
                    <div className="w-16 h-0.5 bg-green-500 mx-auto"></div>
                </div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white   rounded-lg shadow">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-5 py-3 text-left text-primary font-semibold text-gray-800 flex justify-between items-center"
                            >
                                {faq.question}
                                <span className="text-green-600 text-xl">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            
                            {openIndex === index && (
                                <div className="px-5 pb-4 text-gray-600 text-sm border-t border-gray-100 pt-3">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default FAQ;