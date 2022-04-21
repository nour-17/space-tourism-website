import React from "react";
export default function Technology({ props, technologyState }) {
  const { description, images, name } = props;
  const [baseImg, setBaseImg] = React.useState("./");
  // var width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
  // setInterval(() => {
  //   console.log(width);
  // }, 500);
  React.useEffect(() => {
    images && setBaseImg(images.portrait);
  }, [images]);
  return (
    <div className="technology">
      <h2
        className="uppercase letter-spacing-2"
        style={{
          margin: "1rem",
        }}
      >
        <span
          style={{
            color: "hsl(var(--clr-white) / 0.25)",
            marginRight: ".5em",
          }}
        >
          03
        </span>
        space launch 101
      </h2>
      <div className="technology-content ">
        {/* numbers */}
        <div className="num-indicators ff-secondary grid">
          <button
            aria-selected="true"
            onClick={() => {
              technologyState("Launch vehicle");
            }}
          >
            <span>1</span>
          </button>
          <button
            aria-selected="false"
            onClick={() => {
              technologyState("Spaceport");
            }}
          >
            <span>2</span>
          </button>
          <button
            aria-selected="false"
            onClick={() => {
              technologyState("Space capsule");
            }}
          >
            <span>3</span>
          </button>
        </div>
        {/* info */}
        <div className="technology-info">
          <h6 className="tech-header uppercase fs-5">the technology...</h6>
          <h1 className="tech-title fs-6 ff-secondary uppercase">{name}</h1>
          <p className="tech-description fs-4">{description}</p>
        </div>
      </div>
      <img src={baseImg} alt="technology img" className="tech-img" />
    </div>
  );
}
