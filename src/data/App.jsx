import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../../App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
