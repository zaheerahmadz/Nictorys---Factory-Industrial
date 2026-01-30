import React from "react";

const WhyChooseUs = () => {
  const data = [
    {
      id: 1,
      img: "https://quomodosoft.com/html/nictorys/assets/images/features/01.png",
      title: "01. Quality Materials",
      info: "We use premium-quality materials to ensure long-lasting and reliable industrial solutions.",
    },
    {
      id: 2,
      img: "https://quomodosoft.com/html/nictorys/assets/images/features/02.png",
      title: "02. Expert Team",
      info: "Our skilled professionals bring years of experience and technical expertise to every project.",
    },
    {
      id: 3,
      img: "https://quomodosoft.com/html/nictorys/assets/images/features/03.png",
      title: "03. Timely Delivery",
      info: "We follow strict timelines to deliver projects on schedule without compromising quality.",
    },
    {
      id: 4,
      img: "https://quomodosoft.com/html/nictorys/assets/images/features/04.png",
      title: "04. 24/7 Support",
      info: "Our support team is available 24/7 to assist you whenever you need help or guidance.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm p-10 text-center hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 mx-auto mb-4"
              />

              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
