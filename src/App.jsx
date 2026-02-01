import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import BgPhoto from "./components/BgPhoto";

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
    </>
  );
};

export default App;
