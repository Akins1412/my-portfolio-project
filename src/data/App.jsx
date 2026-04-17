import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../../App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
