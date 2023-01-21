/* Home component */

import React from "react";
import About from "./About";
import Highlights from "./Highlights";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="App">
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </div>
  );
};

export default Home;
