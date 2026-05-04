import React from 'react';
import { TbTruckDelivery, TbCurrencyTaka, TbMapPin, TbBuildingStore } from 'react-icons/tb';

const HowWorks = () => {
    const cards = [
        { 
            icon: <TbTruckDelivery />, 
            title: "Booking Pick & Drop", 
            desc: "From personal packages to business shipments — we deliver on time, every time."
        },
        { 
            icon: <TbCurrencyTaka />, 
            title: "Cash On Delivery", 
            desc: "Pay when you receive your package. Safe and secure payment option."
        },
        { 
            icon: <TbMapPin />, 
            title: "Delivery Hub", 
            desc: "Strategic locations across the country for faster delivery service."
        },
        { 
            icon: <TbBuildingStore />, 
            title: "SME & Corporate", 
            desc: "Specialized solutions for businesses of all sizes."
        }
    ];
    
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        How It Works
                    </h2>
                    <div className="w-20 h-1 bg-green-500 mx-auto"></div>
                </div>
                
                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                            {/* Icon */}
                            <div className="text-5xl text-green-600 mb-4 flex justify-center">
                                {card.icon}
                            </div>
                            
                            {/* Step Number */}
                            <div className="text-sm text-green-600 font-bold mb-2">
                                Step {i + 1}
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {card.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-600 text-sm">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
                
                {/* CTA Button */}
                <div className="text-center mt-12">
                    <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HowWorks;