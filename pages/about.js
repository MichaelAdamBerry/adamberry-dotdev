import { useSpring, animated } from "react-spring";

export default () => {
  return (
    <>
      <div className="about-page">
        <div className="gradient" />
      </div>

      <style jsx>{`
        .gradient {
          grid-row: 1/6;
          grid-column: 1/6;
          background-color: #d1959233;
          background-image: url("../static/clouds.png");
          opacity: 0.9;
        }

        .about-page {
          width: 100%;
          height: 100%;
          min-height: 100vh;
          max-height: 100vh;
          background-image: url("../static/bg-img-1.png");
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
          grid-row-gap: 1rem;
          grid-column-gap: 1rem;
          font-family: "Nunito", sans-serif;
          font-weight: 200;
        }
      `}</style>
    </>
  );
};
