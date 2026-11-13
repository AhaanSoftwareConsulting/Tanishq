import React, { useEffect, useRef } from "react";

import { Routes, BrowserRouter, Route } from "react-router-dom";

import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";

import HomeComponents from "./components/pages/home/HomeComponents";
import AboutComponents from "./components/pages/about/AboutComponents";
import ContactComponents from "./components/pages/contact/ContactComponents";
import MenuComponents from "./components/pages/menu/MenuComponents";
import GalleryComponents from "./components/pages/gallery/GalleryComponents";

import ScrollToTop from "./ScrollToTop";

import BlogComponents from "./components/pages/blog/BlogComponents";
import BlogDetails from "./components/pages/blog/components/BlogDetails";

import WhatsAppButton from "./components/layouts/whatsapp/WhatsAppButton";

// Visitor Counter API
import { trackWebsiteVisit } from "./api/wordpressApi";
import TermsAndConditions from "./components/pages/policy/TermsAndConditions";
import PrivacyPolicy from "./components/pages/policy/PrivacyPolicy";

function App() {
  const visitTracked = useRef(false);

  // Website Visitor Tracking
  useEffect(() => {
    if (visitTracked.current) return;

    visitTracked.current = true;

    const trackVisit = async () => {
      try {
        const data = await trackWebsiteVisit();

        console.log("Total Website Visits:", data.total_visitors);
      } catch (error) {
        console.error("Visitor Tracking Error:", error);
      }
    };

    trackVisit();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<HomeComponents />} />

        <Route path="/about" element={<AboutComponents />} />

        <Route path="/menu" element={<MenuComponents />} />

        <Route path="/blog" element={<BlogComponents />} />

        <Route path="/blog/:slug" element={<BlogDetails />} />

        <Route path="/gallery" element={<GalleryComponents />} />

        <Route path="/contact" element={<ContactComponents />} />

        <Route path="/terms-and-conditions" element={<TermsAndConditions />}/>

        <Route path="/privacy-policy" element={<PrivacyPolicy />}/>

      </Routes>

      <Footer />

      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
