import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import Katie from "../src/images/katie-zaferes.png"
// import {useState} from "react"
// import data from "./data";

function App() {

    // const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="app--card">
        <Card 
          coverImg="katie-zaferes.png"
          rating="6"
          location="USA"
          price="136"
          title="Life lessons with Katie Zaferes"
        />
      </div>
    </div>
  );
}

export default App;
