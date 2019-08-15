import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import useMeasure from "../useMeasure";

const OtherWork = () => {
  const [on, toggle] = useState(false);
  const [bind, { height, top }] = useMeasure();
  console.log("height", height);
  const animation = useSpring({
    overflow: "hidden",
    height: on ? height + top * 2 : 0
  });

  return (
    <div>
      <h3>
        <button onClick={() => toggle(!on)}>Other Work</button>
      </h3>

      <animated.div style={animation}>
        <div {...bind} className="content-item">
          <p>
            Lorem ipsum dolor amet af you probably haven't heard of them
            truffaut, umami cred venmo microdosing. Bicycle rights before they
            sold out shaman leggings pug 3 wolf moon salvia marfa flannel
            chartreuse schlitz. Typewriter sriracha beard vexillologist vape.
            Semiotics chartreuse authentic umami mixtape bitters edison bulb.
            Freegan hella hexagon enamel pin put a bird on it, beard 90's
            gluten-free migas pinterest fingerstache church-key wolf hammock.
          </p>
        </div>
      </animated.div>
      <style jsx>{`
        button {
          background: none;
          border: none;
          line-height: 2rem;
          font-size: 1.5rem;
          color: #f5d231;
          cursor: pointer;
          border-bottom: solid;
          padding-left: 0;
        }
        button:after {
          content: " >";
        }
        .content-item {
          padding: 0.5rem 1rem;
          background-color: #17141430;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};
export default OtherWork;
