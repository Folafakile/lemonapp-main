import "./App.css";
// importamos el componente main  y lo usamos en el return

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/Notfound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import ConfirmedBooking from "./components/ConfirmedBooking";


function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Booking" element={<Booking />} />
              <Route path="/Reservations" element={<Booking />} />
              <Route path="/Confirmedbooking" element={<ConfirmedBooking />} />
              <Route path= '*' element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
