import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "../data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
