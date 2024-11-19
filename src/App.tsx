import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Pets from "./components/Pets/Pets";
import Help from "./components/Help/Help";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
