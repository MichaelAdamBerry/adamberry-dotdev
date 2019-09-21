import React, { useState } from "react";
import Layout from "../components/MyLayout";
import { animated, useSpring } from "react-spring";
import Title from "../components/Title";
import LetsTalkButton from "../components/LetsTalkButton";
import ContactCardFormik from "../components/ContactCardFormik";
export default () => {
  const [loadingState, setLoadingState] = useState("");
  const [isForm, setForm] = useState(false);
  const toggleForm = () => {
    setForm(!isForm);
  };

  const contactOpen = useSpring({
    opacity: isForm ? 1 : 0
  });

  const pageFadeIn = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });
  return (
    <animated.div style={{ opacity: pageFadeIn.opacity }}>
      <Layout
        bgImg="../static/bg-water-tower.png"
        bgImgSm="../static/bg-water-tower-sm.png">
        <Title
          name={"Michael Adam Berry"}
          subtitle={!isForm ? "Full Stack Web Development" : ""}
        />
        <div className="quote-mark">
          <img
            alt="large quotation mark"
            src="../static/quote-mark-light.svg"
          />
        </div>
        <div className="quote">
          <p> Make great things and then make them better</p>
        </div>
        <LetsTalkButton onClick={() => setForm(!isForm)} visibility={isForm} />
        {isForm && (
          <div className="content">
            <animated.div
              style={{
                margin: "auto",
                opacity: contactOpen.opacity,
                maxWidth: "600px",
                padding: "1rem",
                backgroundColor: "#2f2f2f55",
                height: "100%"
              }}
              className="content-container">
              <h1>
                fullstack <br />
                web developer
              </h1>

              <p>let's collaborate!</p>

              <ContactCardFormik />
            </animated.div>
          </div>
        )}

        <style jsx>{`

.content {
  grid-row: 2/5;
  grid-column: 1/6;
  justify-self: center;
  width: 90vw;
  max-width: 600px;
}

.content h1 {
  font-weight: 700;
  font-size: 1.8rem;
  margin-top: 0;
  color: var(--purp);
}
.content p {
  font-size: 1.5rem;
  width: 20rem;
  color: var(--purp);
}

.content p,
.content h1,
.content h2 {
  line-height: 2rem;
  margin: 1rem 0;
}

.content div {
  margin: 1rem 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}


        svg {
          color: var(--main-dark-blue);
        }
        .item {
            width: 1rem;
            height; 1rem;
        }
        .quote, .quote-mark {
          grid-column: 2/5;
          grid-row: 5/6;
          justify-self: start;
          align-self: center;
          font-size: 1.3rem;
          color: white;
        }
        .quote-mark {
          width : 2.7rem;
          height: 2.7rem;
          margin-left: -1rem;
        }
        @media (max-width: 425px) {
          .quote p {
            color: var(--purp);
            width: 50%;
            margin-left: 1rem;
          }

          .quote-mark {
            margin-left: .5rem;
          }



          .quote-mark, .quote {
            grid-column: 1/6;
            align-self : start;
          }

          .content-container {
            max-width: unset;
          }

          .content div {
            margin: 0;
          }
        }

      `}</style>
      </Layout>
    </animated.div>
  );
};
