import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
    author: "John Doe",
    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_user_personalization&w=740&q=80",
    job: "Manager of Demok",
  },

  {
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Alice Johnson",
    img: "https://img.freepik.com/free-photo/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.jpg?semt=ais_hybrid&w=740&q=80",
    job: "Manager of Demok",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { img, author, job, text } = testimonials[activeIndex];

  return (
    <section
      className="h-[500px] bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/01/75/58/17/360_F_175581721_gEMwLZksRuHM1UKEkhpWHFvsqQXdGePn.jpg')",
      }}
    >
      <div className="container mx-auto py-10 px-4 flex flex-col items-center max-w-xl text-center">
        {/* Photo */}
        <img
          src={img}
          alt={author}
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-orange-600"
        />

        {/* Author name and job */}
        <p className=" font-semibold text-lg">{author}</p>
        <p className="mb-6">{job}</p>

        {/* Testimonial text */}
        <p className="text-gray-200 text-lg md:text-xl mb-10">{text}</p>

        {/* Carousel dots */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === activeIndex ? "bg-orange-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
