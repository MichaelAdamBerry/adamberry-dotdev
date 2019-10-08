import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const PhotoGrid = ({ data }) => {
  const windowWidth = window.innerWidth;
  const columns = windowWidth < 500 ? 2 : 3;

  const width = windowWidth > 800 ? 600 : 500;

  // Hook3: Hold items
  const [items, set] = useState(data);

  let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
  let gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const xy = [
      (width / columns) * column,
      (heights[column] += child.height / 1.5) - child.height / 1.5
    ]; // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...child, xy, width: width / columns, height: child.height / 1.5 };
  });

  const transitions = useTransition(gridItems, item => item.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25
  });

  return (
    <>
      <div className="list" style={{ height: Math.max(...heights) }}>
        {transitions.map(({ item, props: { xy, ...rest }, key }) => (
          <animated.div
            key={key}
            style={{
              position: "absolute",
              willChange: "transform, width, height, opacity",
              overflow: "hidden",
              transform: xy.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
              ...rest
            }}>
            <div
              style={{
                backgroundImage: `url(${item.css})`,
                // position: "relative",
                backgroundSize: "cover",
                margin: "15px",
                backgroundPosition: "center center",
                width: width,
                height: "100%",
                maxWidth: "180px",
                overflow: "hidden",
                textTransform: "uppercase",
                fontSize: "10px",
                lineHeight: "10px",
                borderRadius: "4px",
                boxShadow: "0px 10px 50px -10px rgba(0, 0, 0, 0.2)"
              }}
            />
          </animated.div>
        ))}
      </div>
      <style jsx>{`
        .list {
          position: relative;

          height: 100%;
          margin: auto;
        }
      `}</style>
    </>
  );
};
export default PhotoGrid;
