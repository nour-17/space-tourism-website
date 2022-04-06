import React from "react";

export default function Destination(props) {
  return (
    <div className="destination">
      <div>
        <h2></h2>
        <img src={props.img} alt="" />
      </div>
      <div>
        <nav></nav>
        <h1></h1>
        <p></p>
        <div>
          <div>
            <p>avg Distance</p>
            <h4>{props.avgDistance}</h4>
          </div>
          <div>
            <p>est. travel time</p>
            <h4>{props.estTravel}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
