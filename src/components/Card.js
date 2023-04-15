import React from "react"

export default function Card(props){
    return(
        <div>
            <img src={require(`../images/${props.CoverImg}`)} alt="" />
            <div>
                <img src="../images/star.png" />
            </div>
        </div>
    )
}