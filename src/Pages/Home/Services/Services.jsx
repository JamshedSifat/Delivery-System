import React from 'react';
import { 
  FaTruck, 
  FaMapMarkerAlt, 
  FaBox, 
  FaMoneyBillWave, 
  FaBuilding, 
  FaUndo 
} from 'react-icons/fa';

const Services = () => {
  const cards = [
    { 
      icon: <FaTruck />, 
      title: "Express & Standard Delivery", 
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off." 
    },
    { 
      icon: <FaMapMarkerAlt />, 
      title: "NationWide Delivery", 
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours." 
    },
    { 
      icon: <FaBox />, 
      title: "Fulfillment Solution", 
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support." 
    },
    { 
      icon: <FaMoneyBillWave />, 
      title: "Cash on Home Delivery", 
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product." 
    },
    { 
      icon: <FaBuilding />, 
      title: "Corporate Service / Contract In Logistics", 
      desc: "Customized corporate services which includes warehouse and inventory management support." 
    },
    { 
      icon: <FaUndo />, 
      title: "Parcel Return", 
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants." 
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-green-200"
            >
              {/* Icon Section */}
              <div className="flex justify-center pt-8 pb-4">
                <div className="bg-green-50 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl text-green-600">
                    {card.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-2">
                <h3 className="font-bold text-xl text-gray-800 mb-3 text-center group-hover:text-green-600 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {card.desc}
                </p>
                
                {/* Learn More Link */}
                <div className="mt-4 text-center">
                  <a href="#" className="text-green-600 text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all duration-200">
                    Learn More 
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>

              {/* Bottom Green Line */}
              <div className="h-1 bg-gradient-to-r from-green-400 to-green-600 w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg">
            Request a Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;