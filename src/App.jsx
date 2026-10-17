import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import HomeComponents from "./components/pages/home/HomeComponents";
import AboutComponents from "./components/pages/about/AboutComponents";
import ContactComponents from "./components/pages/contact/ContactComponents";
import MenuComponents from "./components/pages/menu/MenuComponents";
import GalleryComponents from "./components/pages/gallery/GalleryComponents";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeComponents />} />
        <Route path="/about" element={<AboutComponents />} />
        <Route path="/menu" element={<MenuComponents />} />
        <Route path="/gallery" element={<GalleryComponents />} />
        <Route path="/contact" element={<ContactComponents />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
