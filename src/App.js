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
          coverImg="../images/katie-zaferes.png"

        />
      </div>
    </div>
  );
}

export default App;
