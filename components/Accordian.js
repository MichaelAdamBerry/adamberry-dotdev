import React, { useState, useEffect } from "react";
import TechStuff, {
  FrontEnd,
  DataViz,
  ECommerce,
  JamStack
} from "./about-components/TechStuff";

import MobileMenu from "./about-components/MobileMenu";
import NonTechStuff from "./about-components/NonTechStuff";
import ActingStuff from "./about-components/ActingStuff";
import Social from "./about-components/Social";
import Production from "./about-components/Production";
import Tldr from "./about-components/Tldr";
import Frame from "./about-components/Frame";
import styled from "@emotion/styled";

const Accordian = () => {
  const [windowWidth, setWindowWidth] = useState(800);
  const [socialOn, toggleSocial] = useState(false);
  const [pastWork, togglePastWork] = useState(false);
  const [tldrOn, toggleTldr] = useState(false);
  const [workOn, toggleWork] = useState(false);
  const [aboutOn, toggleAbout] = useState(false);

  const [techStuffOn, toggleTechStuff] = useState(false);
  const [nonTechStuff, toggleNonTechStuff] = useState(false);
  const [actingSectionOn, toggleActingSection] = useState(false);
  const [carpentrySectionOn, toggleCarpentrySection] = useState(false);

  const [frontEndOn, toggleFrontEnd] = useState(false);
  const [jamStackOn, toggleJamStack] = useState(false);
  const [eCommerceOn, toggleECommerce] = useState(false);
  const [dataVizOn, toggleDataViz] = useState(false);

  useEffect(() => {
    if (typeof window != undefined) {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const closeContent = () => {
    toggleTechStuff(false);
    toggleNonTechStuff(false);
    toggleActingSection(false);
    toggleCarpentrySection(false);
  };

  const toggleAllTech = () => {
    toggleDataViz(!dataVizOn);
    toggleECommerce(!eCommerceOn);
    toggleJamStack(!jamStackOn);
    toggleFrontEnd(!frontEndOn);
  };

  const closeTech = () => {
    toggleDataViz(false);
    toggleECommerce(false);
    toggleJamStack(false);
    toggleFrontEnd(false);
  };

  return (
    <>
      <div className="desktop-menu">
        <h3>
          <button
            className={tldrOn && "underline"}
            onClick={() => {
              toggleSocial(false);
              togglePastWork(false);
              toggleWork(false);
              toggleAbout(false);
              closeContent();
              toggleTldr(!tldrOn);
            }}>
            tldr;
          </button>
        </h3>
        <h3>
          <button
            className={aboutOn && "underline"}
            onClick={() => {
              toggleTldr(false);
              toggleSocial(false);
              togglePastWork(false);
              toggleWork(false);
              closeContent();
              toggleAbout(!aboutOn);
            }}>
            About
          </button>
        </h3>

        <div className="subMenu">
          <Frame isOpen={aboutOn}>
            <h4>
              <button
                className={techStuffOn && "underline"}
                onClick={() => {
                  closeContent();
                  toggleTechStuff(true);
                }}>
                Web Dev
              </button>
            </h4>
          </Frame>
        </div>
        {techStuffOn && (
          <div className="sub-sub">
            {" "}
            <div className="sub-sub">
              <Frame isOpen={techStuffOn}>
                <h4>
                  <button
                    className={frontEndOn && "underline"}
                    onClick={() => {
                      closeTech();
                      toggleFrontEnd(true);
                    }}>
                    Front End Development
                  </button>
                </h4>
              </Frame>
            </div>
            <div className="sub-sub">
              <Frame isOpen={techStuffOn}>
                <h4>
                  <button
                    className={jamStackOn && "underline"}
                    onClick={() => {
                      closeTech();
                      toggleJamStack(true);
                    }}>
                    Jam Stack
                  </button>
                </h4>
              </Frame>
            </div>
            <div className="sub-sub">
              <Frame isOpen={techStuffOn}>
                <h4>
                  <button
                    className={eCommerceOn && "underline"}
                    onClick={() => {
                      closeTech();
                      toggleECommerce(true);
                    }}>
                    e-commerce
                  </button>
                </h4>
              </Frame>
            </div>
            <div className="sub-sub">
              <Frame isOpen={techStuffOn}>
                <h4>
                  <button
                    className={dataVizOn && "underline"}
                    onClick={() => {
                      closeTech();
                      toggleDataViz(true);
                    }}>
                    Data Viz
                  </button>
                </h4>
              </Frame>
            </div>{" "}
          </div>
        )}
        <div className="subMenu">
          <Frame isOpen={aboutOn}>
            <h4>
              <button
                className={nonTechStuff && "underline"}
                onClick={() => {
                  closeTech();
                  closeContent();
                  toggleNonTechStuff(true);
                }}>
                Life
              </button>
            </h4>
          </Frame>
        </div>

        <h3>
          <button
            className={pastWork && "underline"}
            onClick={() => {
              closeContent();
              toggleTldr(false);
              toggleWork(false);
              toggleSocial(false);
              togglePastWork(!pastWork);
              toggleAbout(false);
            }}>
            Previous
          </button>
        </h3>

        <div className="subMenu">
          <Frame isOpen={pastWork}>
            <h4>
              <button
                className={actingSectionOn && "underline"}
                onClick={() => {
                  closeContent();
                  toggleActingSection(true);
                }}>
                Acting
              </button>
            </h4>

            <h4>
              <button
                className={carpentrySectionOn && "underline"}
                onClick={() => {
                  closeContent();
                  toggleCarpentrySection(true);
                }}>
                Production
              </button>
            </h4>
          </Frame>
        </div>

        <h3>
          <button
            className={socialOn && "underline"}
            onClick={() => {
              closeContent();
              toggleTldr(false);
              togglePastWork(false);
              toggleWork(false);
              toggleSocial(!socialOn);
              toggleAbout(false);
            }}>
            Follow Me
          </button>
        </h3>
        <div className="subMenu">
          <Frame isOpen={socialOn}>
            <div className="content-item skills"></div>
          </Frame>
        </div>
      </div>
      <MobileMenu
        toggleTechStuff={toggleTechStuff}
        closeTech={closeTech}
        toggleDataViz={toggleDataViz}
        toggleECommerce={toggleECommerce}
        toggleJamStack={toggleJamStack}
        toggleFrontEnd={toggleFrontEnd}
        closeContent={closeContent}
        toggleAllTech={toggleAllTech}
        toggleNonTechStuff={toggleNonTechStuff}
        toggleActingSection={toggleActingSection}
        toggleCarpentrySection={toggleCarpentrySection}
        toggleSocial={toggleSocial}
        toggleTldr={toggleTldr}
      />
      <div className="rendered-content">
        {tldrOn && <Tldr />}
        {actingSectionOn && <ActingStuff />}
        {carpentrySectionOn && <Production />}
        {techStuffOn && <TechStuff />}
        {techStuffOn && frontEndOn && <FrontEnd />}
        {techStuffOn && jamStackOn && <JamStack />}
        {techStuffOn && eCommerceOn && <ECommerce />}
        {techStuffOn && dataVizOn && <DataViz />}
        {nonTechStuff && <NonTechStuff />}
        {socialOn && <Social />}
      </div>

      <style jsx>{`
        .desktop-menu,
        .rendered-content {
          grid-row: 2/6;
          margin-left: 1rem;
          opacity: 0.99;
          z-index: 20;
        }

        .desktop-menu {
          grid-column: 1/3;
          margin-top: 3rem;
        }

        .rendered-content {
          margin-top: 50px;
          grid-column: 3/6;
          color: white;
          width: 80%;
          justify-self: start;
          border-radius: 5px;
        }

        h3,
        h4,
        button {
          font-size: 1.5rem;
        }

        h3 {
          grid-column: 1/4;
        }

        h3,
        h4 {
          margin-bottom: 2rem;
        }

        div.subMenu {
          grid-column: 2/4;
          padding-left: 1rem;
        }

        div.sub-sub {
          grid-column: 2/4;
          padding-left: 1rem;
        }

        button {
          background: none;
          border: none;
          line-height: 1.5rem;
          color: var(--blueish);
          cursor: pointer;

          padding-left: 0.5rem;
        }

        button :focus {
          outline: none;
        }

        ul {
          list-style: none;
          padding: 0;
          display: flex;
          width: 300px;
          flex-wrap: wrap;
        }

        li :after {
          content: ", ";
          padding-right: 1rem;
        }

        li:last-of-type:after {
          content: " ";
        }

        button.underline {
          font-weight: 700;
        }

        .skills {
          display: flex;
        }

        @media (max-width: 800px) {
          .desktop-menu {
            grid-column: 1/3;
            margin-left: 40px;
          }

          .rendered-content {
            width: 94%;
            margin: auto;
          }
        }

        @media (max-width: 600px) {
          .desktop-menu {
            padding: 1rem 10px;
            grid-row: 2/3;
            grid-column: 1/5;
            margin-left: 30px;
          }
          .rendered-content {
            grid-column: 1/6;
            grid-row: 1/6;
          }
        }

        @media (max-width: 425px) {
          .desktop-menu {
            display: none;
          }
          .rendered-content {
            grid-column: 1/6;
            grid-row: 2/6;
          }
        }
      `}</style>
    </>
  );
};

export default Accordian;
