import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import Amazon from '../../../assets/brands/amazon.png'
import Casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/amazon.png'
import star from '../../../assets/brands/star.png'
import randstad from '../../../assets/brands/randstad.png'

const Brand = () => {
    const brands = [
        { id: 1, name: 'Amazon', image: Amazon },
        { id: 2, name: 'Casio', image: Casio },
        { id: 3, name: 'Moonstar', image: moonstar },
        { id: 4, name: 'Star', image: star },
        { id: 5, name: 'Randstad', image: randstad },
    ];

    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                        We've helped thousands of sales teams
                    </h1>
                    <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
                    <p className="text-gray-600 mt-3 text-sm">
                        Trusted by leading companies worldwide
                    </p>
                </div>

                {/* Brands Swiper */}
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={20}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 25,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}
                    className="brand-swiper"
                >
                    {brands.map((brand) => (
                        <SwiperSlide key={brand.id}>
                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
                                <div className="flex justify-center items-center h-full">
                                    <img 
                                        src={brand.image} 
                                        alt={brand.name}
                                        className="max-w-full max-h-20 object-contain hover:scale-110 transition-transform duration-300 grayscale hover:grayscale-0"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Brand;