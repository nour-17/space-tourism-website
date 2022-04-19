import React from "react";
export default function Crew({ props, crewState }) {
  const { bio, images, name, role } = props;
  const [baseImg, setBaseImg] = React.useState("./");
  React.useEffect(() => {
    images && setBaseImg(images.png);
  }, [images]);
  return (
    <div className="crew grid-container grid-container--crew">
      <h2 className="uppercase crew-title letter-spacing-2">
        <span
          style={{
            color: "hsl(var(--clr-white) / 0.25)",
            marginRight: ".5em",
          }}
        >
          02
        </span>{" "}
        meet your crew
      </h2>
      <div className="dot-indicators underline flex">
        <button
          aria-selected="true"
          onClick={() => {
            crewState("Commander");
          }}
        >
          <span className="sr-only">commander</span>
        </button>
        <button
          aria-selected="false"
          onClick={() => {
            crewState("Mission Specialist");
          }}
        >
          <span className="sr-only">the mission specialist</span>
        </button>
        <button
          aria-selected="false"
          onClick={() => {
            crewState("Pilot");
          }}
        >
          <span className="sr-only">the pilot</span>
        </button>
        <button
          aria-selected="false"
          onClick={() => {
            crewState("Flight Engineer");
          }}
        >
          <span className="sr-only">the engineer</span>
        </button>
      </div>
      <article className="crew-info flow">
        <header>
          <h2 className="ff-secondary uppercase role">{role}</h2>
          <h1 className="ff-secondary uppercase fs-6">{name}</h1>
        </header>
        <p className="fs-4">{bio}</p>
      </article>
      <img src={baseImg} alt="the crew pictures" />
    </div>
  );
}
