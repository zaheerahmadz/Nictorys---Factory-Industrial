import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Brands() {
  const images = [
    "/Partner/img-1.jpg",
    "/Partner/img-2.jpg",
    "/Partner/img-3.jpg",
    "/Partner/img-4.jpg",
  ];

  return (
    <div className="w-[93%] mx-auto py-5">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // optional: pause autoplay on hover
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-xl w-full h-48 md:h-60 lg:h-48">
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
