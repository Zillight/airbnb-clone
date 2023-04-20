import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Slides from "./data"
// import Katie from "../src/images/katie-zaferes.png"
// import {useState} from "react"
// import data from "./data";

function App() {
    // const [count, setCount] = useState(0)
    const cardSlides = Slides.map(Slide => )
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="app--card">
        <Card 
          coverImg="katie-zaferes.png"
          rating="5.0"
          location="USA"
          price="136"
          title="Life lessons with Katie Zaferes"
        />
        <Card 
          coverImg="katie-zaferes.png"
          rating="5.0"
          location="USA"
          price="136"
          title="Life lessons with Katie Zaferes"
        />
        <Card 
          coverImg="wedding-photography.png"
          rating="5.0"
          location="Online"
          price="125"
          title="Learn Wedding Photography"
        />
        <Card 
          coverImg="mountain-bike.png"
          rating="4.8"
          location="Norway"
          price="50"
          title="Group Mountain Biking"
        />
      </div>
    </div>
  );
}

export default App;
