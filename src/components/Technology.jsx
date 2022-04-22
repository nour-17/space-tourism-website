import React from "react";
export default function Technology({ props, technologyState }) {
  const { description, images, name } = props;
  const [baseImg, setBaseImg] = React.useState("./");
  const tabs = document.getElementsByClassName("tech-tabs");
  const [size, setSize] = React.useState(window.innerWidth);
  function changeTab(n) {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("activee");
      tabs[i].setAttribute("aria-selected", "false");
    }
    tabs[n].setAttribute("aria-selected", "true");
  }
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
  }, []);
  React.useEffect(() => {
    images &&
      setBaseImg(window.innerWidth > 770 ? images.portrait : images.landscape);
  }, [images, size]);
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
              changeTab(0);
              technologyState("Launch vehicle");
            }}
            className={"tech-tabs"}
          >
            <span>1</span>
          </button>
          <button
            aria-selected="false"
            onClick={() => {
              changeTab(1);
              technologyState("Spaceport");
            }}
            className={"tech-tabs"}
          >
            <span>2</span>
          </button>
          <button
            aria-selected="false"
            onClick={() => {
              changeTab(2);
              technologyState("Space capsule");
            }}
            className={"tech-tabs"}
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
