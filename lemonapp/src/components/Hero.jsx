import React from "react";
import RestaurantFood from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. We offer a variety
            of dishes made with the freshest ingredients and cooked to
            perfection. Our menu features a selection of appetizers, salads,
            entrees, and desserts.
          </p>
          <button>
            <Link to="booking">Reserve a table</Link>
          </button>
        </div>
        <img src={RestaurantFood} alt="Little Lemon Restaurant Food" />
      </div>
    </section>
  );
};

export default Hero;
