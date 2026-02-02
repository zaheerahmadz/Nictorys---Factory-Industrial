import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const images = [
    "./public/Slider/img-1.jpg",
    "./public/Slider/img-2.jpg",
    "./public/Slider/img-3.jpg",
    "./public/Slider/img-4.jpg",
    "./public/Slider/img-5.jpg",
    "./public/Slider/img-6.jpg",
  ];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="w-[93%] mx-auto py-5">
      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={20}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="h-100 overflow-hidden rounded-xl">
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-10">
        <button
          ref={prevRef}
          className="bg-white shadow-lg p-4 hover:bg-orange-600 hover:text-white transition rounded"
        >
          <FaArrowLeft />
        </button>

        <button
          ref={nextRef}
          className="bg-white shadow-lg p-4 hover:bg-orange-600 hover:text-white transition rounded"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
