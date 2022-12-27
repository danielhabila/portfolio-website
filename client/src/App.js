import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div id="container">
      <Router>
        <Navbar />
        <div id="main-content">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
