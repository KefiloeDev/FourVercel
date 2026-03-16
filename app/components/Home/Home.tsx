"use client";
import React, { useEffect } from "react";
import Hero from "../../Hero/page";
import About from "../../About/page";
import Services from "../../Services/page";
import Project from "../../Project/page";
import Contact from "../../Contact/page";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Project />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
