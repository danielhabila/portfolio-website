import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <div id="container">
      <Navbar />
      <div id="main-content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}
export default App;
