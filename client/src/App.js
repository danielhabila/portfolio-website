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
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route
            path="/about"
            element={
              <div>
                <About />
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <div>
                <Projects />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div>
                <Contact />
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
