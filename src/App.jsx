import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import BgPhoto from "./components/BgPhoto";
import Project from "./components/Porject";
import Slider from "./components/Slider";
import ChooseUs from "./components/ChooseUs";
import Members from "./components/Members";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import RecentNews from "./components/RecentNews";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <About />
      <Services />
      <Contact />
      <BgPhoto />
      <Project />
      <Slider />
      <ChooseUs />
      <Members />
      <Brands />
      <Testimonials />
      <RecentNews />
      <Footer />
    </>
  );
};

export default App;
