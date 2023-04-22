import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"
// import data from "./data";

function App() {
    const cards = data.map(item => {
      return(
        <Card
        key={item.id}
        coverImg={item.coverImg}
        rating={item.stats.rating}
        location={item.location}
        price={item.price}
        title={item.title}
        />
      )
    })

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="app--card"> 
        {cards}
      </div>
    </div>
  );
}

export default App;
