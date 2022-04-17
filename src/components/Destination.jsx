import React from "react";

export default function Destination({ props, destinationState }) {
  const { name, images, description, distance, travel } = props;
  const [baseImg, setBaseImg] = React.useState("./");
  React.useEffect(() => {
    images && setBaseImg(images.png);
  }, [images]);
  return (
    <div className="destination">
      <div>
        <h2 className="uppercase">
          <span
            className=""
            style={{
              color: "hsl(var(--clr-white) / 0.25)",
              marginRight: ".5em",
            }}
          >
            01
          </span>{" "}
          pick your destination
        </h2>
        <img src={baseImg} alt="planet photo" />
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
        <article>
          <h1 className="fs-7 ff-secondary uppercase">{name}</h1>
          <p>{description}</p>
          <div className="flex destination-last-section">
            <div>
              <h4 className="uppercase ff-secondary letter-spacing-1">
                avg Distance
              </h4>
              <h4 className="fs-6 ff-secondary uppercase">{distance}</h4>
            </div>
            <div>
              <h4 className="uppercase ff-secondary letter-spacing-1">
                est. travel time
              </h4>
              <h4 className="fs-6 ff-secondary uppercase">{travel}</h4>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
