import React, { useState, useRef, useLayoutEffect } from "react";
import { useSpring, animated } from "react-spring";

const Frame = props => {
  const ref = useRef(null);
  const [height, setFullHeight] = useState(0);

  useLayoutEffect(() => setFullHeight(ref.current.clientHeight), []);
  const spring = useSpring({ height: props.isOpen ? height : 0 });
  return (
    <animated.div
      ref={ref}
      style={{
        overflow: "hidden",
        height: !ref.current ? "auto" : spring.height,
        borderLeft: props.isOpen ? "dotted 1px var(--blueish)" : "none"
      }}>
      {props.children}
    </animated.div>
  );
};

export default Frame;
