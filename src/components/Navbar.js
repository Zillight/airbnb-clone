import React from "react"

export default function Navbar(){
    return(
        <nav>
            <img src={require("../images/airbnb-logo.png")} alt="airbnb logo" className="navbar--logo"/>
        </nav>
    )
}