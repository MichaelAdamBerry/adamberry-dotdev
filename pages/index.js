import React, { useState } from "react";
import Layout from "../components/MyLayout";
import { animated, useSpring } from "react-spring";
import Title from "../components/Title";
import LetsTalkButton from "../components/LetsTalkButton";
import Contact from "../components/contact-form/Contact";
import WordCloud from "../components/WordCloud";
export default () => {
  const [isForm, setForm] = useState(false);
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
        <Title
          name={"Michael Adam Berry"}
          subtitle={!isForm ? "Full Stack Web Development" : ""}
        />

        <LetsTalkButton onClick={() => setForm(!isForm)} isForm={isForm} />
        {isForm ? (
          <Contact setForm={setForm} opacity={opacity} />
        ) : (
          <WordCloud />
        )}
      </Layout>
    </animated.div>
  );
};
