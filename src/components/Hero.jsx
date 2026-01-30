import React, { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image:
      "https://quomodosoft.com/html/nictorys/assets/images/slider/slide-2.jpg",
    title: "We Provide Best Industrial Services",
    description: [
      "Delivering high-quality industrial solutions tailored to modern business needs.",
      "Our expert team ensures safety, efficiency, and precision in every project.",
      "Trusted by industries for reliable and cost-effective services worldwide.",
    ],
  },
  {
    image:
      "https://quomodosoft.com/html/nictorys/assets/images/slider/slide-1.jpg",
    title: "Advanced Mechanical & Engineering Solutions",
    description: [
      "We specialize in mechanical engineering and complex industrial systems.",
      "Innovative technologies combined with years of field experience.",
      "Supporting large-scale industrial operations with dependable solutions.",
    ],
  },
  {
    image:
      "https://quomodosoft.com/html/nictorys/assets/images/slider/slide-3.jpg",
    title: "Trusted Partner for Oil & Gas Industries",
    description: [
      "Providing comprehensive services for oil, gas, and energy sectors.",
      "Committed to international standards, safety, and sustainability.",
      "Your long-term partner for refinery and petroleum infrastructure projects.",
    ],
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-3xl px-6 md:px-12 lg:px-20 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                {slide.title}
              </h2>

              <div className="space-y-2 md:space-y-3 text-gray-200 text-sm sm:text-base md:text-lg mb-6 md:mb-8">
                {slide.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 md:gap-4">
                <button className="px-5 md:px-6 py-2.5 md:py-3 flex items-center gap-2 bg-orange-700 hover:bg-orange-800 transition rounded-full font-semibold text-sm md:text-base">
                  Our Industry
                  <MdOutlineNavigateNext />
                </button>
                <button className="px-5 md:px-6 py-2.5 md:py-3 border border-white flex items-center gap-2 hover:bg-orange-700 transition rounded-full font-semibold text-sm md:text-base">
                  Contact Us
                  <MdOutlineNavigateNext />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev Button (LG ONLY) */}
      <button
        onClick={prevSlide}
        className="hidden lg:flex absolute top-1/2 left-6 -translate-y-1/2 bg-white/30 hover:bg-white hover:text-black text-white rounded-full p-4 z-30"
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Next Button (LG ONLY) */}
      <button
        onClick={nextSlide}
        className="hidden lg:flex absolute top-1/2 right-6 -translate-y-1/2 bg-white/30 hover:bg-white hover:text-black text-white rounded-full p-4 z-30"
      >
        <FaArrowRight size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-orange-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
