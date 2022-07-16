import React from "react";
import Title from "./Title";
import Description from "./Description";
import Image from "./Image";
import "./SimpleCard.css"

function SimpleCard() {
    return (
    <div className="card">
    <div className="image">
        <Image/>
    </div>

    <div className="content">
    <div className="title">
        <Title/>
    </div>
    <div className="description">
        <Description/>
        </div>
    </div>
    </div>
    )
}
export default SimpleCard;