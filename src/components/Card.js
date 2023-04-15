import React from "react"

export default function Card(props) {
    return(
        <div>
            <img src={require("../images/katie-zaferes.png")} alt="athlete"/>
            <div>
                <img src={require("../images/star.png")} alt="rating-star" />
                <span>(6) • USA</span>
                <p>Life lessons with Katie Zaferes</p>
                <p><span>from $136</span> / person</p>
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