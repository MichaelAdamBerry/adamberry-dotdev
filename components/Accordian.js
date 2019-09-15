import React, { useState } from "react";
import TechStuff from "./about-components/TechStuff";
import NonTechStuff from "./about-components/NonTechStuff";
import ActingStuff from "./about-components/ActingStuff";
import Social from "./about-components/Social";
import Production from "./about-components/Production";
import Tldr from "./about-components/Tldr";
import Frame from "./about-components/Frame";

const Circle = ({ isOn }) => {
  return (
    <>
      {isOn ? (
        <img
          src="/static/minus-sign.svg"
          alt="minus sign icon to show button toggled open"
        />
      ) : (
        <img
          src="/static/plus-sign.svg"
          alt="plus sign icon to show button toggled close"
        />
      )}
      <style jsx>
        {`
          img {
            padding-left: 5px;
            width: 0.7rem;
            height: 0.7rem;
            line-height: 1rem;
          }
        `}
      </style>
    </>
  );
};

const Accordian = () => {
  const [socialOn, toggleSocial] = useState(false);
  const [pastWork, togglePastWork] = useState(false);
  const [tldrOn, toggleTldr] = useState(true);
  const [workOn, toggleWork] = useState(false);
  const [aboutOn, toggleAbout] = useState(false);

  const [techStuffOn, toggleTechStuff] = useState(false);
  const [nonTechStuff, toggleNonTechStuff] = useState(false);
  const [actingSectionOn, toggleActingSection] = useState(false);
  const [carpentrySectionOn, toggleCarpentrySection] = useState(false);

  const closeContent = () => {
    toggleTechStuff(false);
    toggleNonTechStuff(false);
    toggleActingSection(false);
    toggleCarpentrySection(false);
  };

  return (
    <>
      <div className="menu">
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
          <Circle isOn={aboutOn} />
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
                Tech Stuff
              </button>
            </h4>
            <h4>
              <button
                className={nonTechStuff && "underline"}
                onClick={() => {
                  closeContent();
                  toggleNonTechStuff(true);
                }}>
                Non Tech Stuff
              </button>
            </h4>
          </Frame>
        </div>

        <h3>
          <Circle isOn={pastWork} />
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
            Past Work
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
                Live Event Production
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
            The Social Medias
          </button>
        </h3>
        <div className="subMenu">
          <Frame isOpen={socialOn}>
            <div className="content-item skills"></div>
          </Frame>
        </div>
      </div>
      <div className="rendered-content">
        {tldrOn && <Tldr />}
        {actingSectionOn && <ActingStuff />}
        {carpentrySectionOn && <Production />}
        {techStuffOn && <TechStuff />}
        {nonTechStuff && <NonTechStuff />}
        {socialOn && <Social />}
      </div>

      <style jsx>{`
        .menu,
        .rendered-content {
          grid-row: 2/6;
          margin-left: 1rem;
          opacity: 0.99;
          z-index: 20;
        }

        .menu {
          grid-column: 2/3;
        }

        .rendered-content {
          grid-column: 3/6;
          color: white;
          width: 80%;
          justify-self: start;
          border-radius: 5px;
        }

        h3,
        h4,
        button {
          font-size: 1rem;
        }

        h3 {
          grid-column: 1/4;
        }

        div.subMenu {
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
      `}</style>
    </>
  );
};

export default Accordian;
