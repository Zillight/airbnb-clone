import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import data from "./data";

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="app--card">
        <Card 
          coverImg="require(../images/katie-zaferes.png)"
          rating="6"

        />
      </div>
    </div>
  );
}

export default App;
