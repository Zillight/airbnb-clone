import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import {useState} from "react"
// import data from "./data";

function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false }, 
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true }, 
    { name: "Venus", isGasPlanet: false }, 
    { name: "Neptune", isGasPlanet: true }, 
    { name: "Uranus", isGasPlanet: true }
    ];
    const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="app--card">
        <Card 
          coverImg="../images/katie-zaferes.png"
          rating="6"
          location="USA"
          price="136"
          title="Life lessons with Katie Zaferes"
        />
      </div>
      {planets.map(planet => !planet.isGasPlanet && <h1>{planet.name}</h1>)}
      <div>
        <button onClick={()=>setCount(count + 1)}>Increase</button>
        <button onClick={()=>setCount(count - 1)}>Decrease</button>
        <button onClick={()=>setCount(0)}>Set to Zero</button>
        {count}
      </div>
    </div>
  );
}

export default App;
