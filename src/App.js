import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import GalleryPage from "./components/GalleryPage";
import ContactPage from "./components/ContactPage";
import ServicesSection from "./components/ServicesSection";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default Route: Hero + Gallery */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ServicesSection />
              <GalleryPage />
              <ContactPage />
            </>
          }
        />
        {/* Explicit Gallery Page */}
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
