import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft, FaUserCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Awlad Hossin",
    title: "Senior Product Designer",
  },
  {
    text: "This is another testimonial. Replace this with your real content. Works perfectly on desktop and mobile.",
    name: "Rasel Ahamed",
    title: "CTO",
  },
  {
    text: "Third testimonial sample text goes here. You can add as many slides as you want.",
    name: "Nasir Uddin",
    title: "CEO",
  },
  {
    text: "Fourth one for better looping feel. Add real reviews from your clients.",
    name: "Sarah Khan",
    title: "Product Manager",
  },
];

export default function TestimonialsSwiper() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <FaQuoteLeft className="text-2xl text-green-600" />
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-800 md:text-4xl mb-3">
            What our customers are saying
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-4 rounded-full"></div>
          <p className="mx-auto max-w-xl text-sm text-gray-600">
            Enhance posture, mobility, and well-being effortlessly with Posture Pro.
            Achieve proper alignment, reduce pain, and strengthen your body with ease!
          </p>
        </div>

        {/* Swiper */}
        <div className="relative mt-10">
          <Swiper
            modules={[Navigation, Pagination]}
            loop
            centeredSlides
            slidesPerView={1}
            spaceBetween={24}
            navigation={{
              prevEl: ".t-prev",
              nextEl: ".t-next",
            }}
            pagination={{
              el: ".t-dots",
              clickable: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 28 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <article className="relative min-h-[280px] rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <FaQuoteLeft className="text-3xl text-green-400 opacity-50" />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-sm leading-relaxed text-gray-700 mb-6">
                    {t.text}
                  </p>

                  {/* Divider */}
                  <div className="my-4 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                  {/* User Info */}
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 rounded-full p-2">
                      <FaUserCircle className="text-2xl text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-800">
                        {t.name}
                      </div>
                      <div className="mt-0.5 text-xs text-green-600">
                        {t.title}
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              className="t-prev w-10 h-10 rounded-full bg-white border border-gray-300 text-gray-700 flex items-center justify-center hover:bg-green-50 hover:border-green-500 hover:text-green-600 transition-all duration-200"
              aria-label="Previous"
              type="button"
            >
              <FaChevronLeft />
            </button>

            <div className="t-dots flex items-center justify-center gap-2" />

            <button
              className="t-next w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label="Next"
              type="button"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}