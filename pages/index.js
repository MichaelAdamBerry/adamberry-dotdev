import React, { useState } from "react";
import Layout from "../components/MyLayout";
import { animated, useSpring } from "react-spring";
import { useInterval } from "../hooks/useInterval";
import Title from "../components/Title";
import LetsTalkButton, {
  SkipAnimationButton
} from "../components/LetsTalkButton";
import Contact from "../components/contact-form/Contact";
import TitleAnimation from "../components/TitleAnimation";
import MainBio from "../components/MainBio";
export default () => {
  const [isForm, setForm] = useState(false);
  //animation completes after 11 seconds
  const [isCompleted, toggleCompleted] = useState(false);
  const [isCancelled, cancelAnimation] = useState(false);

  useInterval(() => {
    toggleCompleted(true);
  }, 11000);

  const { opacity } = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });

  return (
    <animated.div style={{ opacity: opacity }}>
      <Layout
        bgImg="../static/bg-water-tower.png"
        bgImgSm="../static/bg-water-tower-sm.png">
        <Title name={"adamberry"} suffix={"dev"} />
        {isCompleted ? (
          <>
            <MainBio />
          </>
        ) : (
          <SkipAnimationButton
            onClick={() => {
              toggleCompleted(true);
              cancelAnimation(true);
            }}
            display={!isCompleted}
          />
        )}
        {!isForm && (
          <TitleAnimation isCompleted={isCompleted} isCancelled={isCancelled} />
        )}
      </Layout>
    </animated.div>
  );
};
