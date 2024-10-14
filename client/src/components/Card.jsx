import React from "react"

const Card = (props) => {
    return (
        <>
            <div className="Card">
                <img src={props.img}></img>
                <h3>{props.name}</h3>
                <h3>{props.location}</h3>
                <a href={props.link}>
                    <button>Link to Wikipedia</button>
                </a> </div>
        </>
    )
}

export default Card;