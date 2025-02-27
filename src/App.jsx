import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import BuyNow from "./pages/BuyNow/BuyNow";
import Navbar from "./shared/Navbar/Navbar";
import Footer from "./shared/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/buy" element={<BuyNow />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
