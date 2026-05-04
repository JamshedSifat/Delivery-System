import React from 'react';
import liveParcel from '../../../assets/image/live-tracking.png'
import safeDelivery from '../../../assets/image/safe-delivery.png'
import callSupport from '../../../assets/image/safe-delivery.png'

const OurPriority = () => {
    const priorities = [
        {
            image: liveParcel,
            title: "Live Parcel Tracking",
            description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind."
        },
        {
            image: safeDelivery,
            title: "100% Safe Delivery",
            description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
        },
        {
            image: callSupport,
            title: "24/7 Call Center Support",
            description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
        }
    ];

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Our Priorities
                    </h2>
                    <div className="w-20 h-1 bg-green-500 mx-auto mb-6 rounded-full"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We focus on what matters most to deliver the best service experience
                    </p>
                </div>

                {/* Cards Grid - 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {priorities.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-green-200"
                        >
                            {/* Image Section */}
                            <div className="flex justify-center pt-8 pb-4">
                                <div className="bg-green-50 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 pt-2 text-center">
                                <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Bottom Green Line */}
                            <div className="h-1 bg-gradient-to-r from-green-400 to-green-600 w-0 group-hover:w-full transition-all duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurPriority;