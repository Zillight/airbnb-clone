import React from "react"

export default function Card(props) {
    return(
        <div className="card">
            <img src={props.coverImg} alt="athlete" className="card--img"/>
            <div className="card--stats">
                <img src={require("../images/star.png")} alt="rating-star" className="card--star"/>
                <span>({props.rating}) •</span>
                <span>{props.location}</span>
            </div>
            <div className="card--text">
                <p>{props.title}</p>
                <p><span>from ${props.price}</span> / person</p>
            </div>
        </div>
    )
}


// return(
//     <div>
//         <img src={require(`../images/`)} alt="" />
//         <div>
//             <img src="../images/star.png" />
//             <span>{props.stats.rating}</span>
//             <span>{props.title}</span>
//         </div>
//     </div>
// )