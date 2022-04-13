import React from "react";

export default function Destination({ props, destinationState }) {
  console.log(props);
  const { name, images, description, distance, travel } = props;

  return (
    <div className="destination">
      <div>
        <h2>pick your destination</h2>
        <img src={"./"} alt="planet photo" />
      </div>
      <div>
        <div className="tabs-btns underline flex">
          <button
            onClick={() => {
              destinationState("moon");
            }}
            aria-selected="true"
            className="uppercase text-accent bg-transparent ff-main letter-spacing-2"
          >
            Moon
          </button>
          <button
            onClick={() => {
              destinationState("mars");
            }}
            aria-selected="false"
            className="uppercase text-accent bg-transparent ff-main letter-spacing-2"
          >
            Mars
          </button>
          <button
            onClick={() => {
              destinationState("europa");
            }}
            aria-selected="false"
            className="uppercase text-accent bg-transparent ff-main letter-spacing-2"
          >
            Europa
          </button>
          <button
            onClick={() => {
              destinationState("titan");
            }}
            aria-selected="false"
            className="uppercase text-accent bg-transparent ff-main letter-spacing-2"
          >
            titan
          </button>
        </div>
        <h1>{name}</h1>
        <p>{description}</p>
        <div>
          <div>
            <p>avg Distance</p>
            <h4>{distance}</h4>
          </div>
          <div>
            <p>est. travel time</p>
            <h4>{travel}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
