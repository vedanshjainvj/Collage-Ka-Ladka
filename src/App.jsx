import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Projects from "./page/Projects";
import Services from "./page/Services";
import "./assets/font/PolySans-Median.woff2";
import "./assets/font/PolySans-Slim.woff2";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExtraComponent from "./page/ExtraComponent";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <div
        className="w-full h-full min-h-screen flex flex-col bg-[#f9fbff] text-[#16191E] font-polySans"
        style={{
          fontFamily: "PolySans",
        }}
      >
        <Header />
        
        <main className="flex-1 w-full bg-[#f9fbff]">
          <AppRouter />
        </main>
        <Footer />
        
      </div>
    </BrowserRouter>
    </>
    
    
  );
};

export default App;
import "./App.css";
import OurTeam from "./page/OurTeam";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/extra-component" element={<ExtraComponent />} />
    </Routes>
  );
};
