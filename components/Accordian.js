import React, { useState } from "react";
import TechStuff from "./about-components/TechStuff";
import NonTechStuff from "./about-components/NonTechStuff";
import Social from "./about-components/Social";
import Tldr from "./about-components/Tldr";
import Frame from "./about-components/Frame";

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
                Carpentry
              </button>
            </h4>
          </Frame>
        </div>

        <h3>
          <button
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
        {actingSectionOn && <p>Acting Section</p>}
        {carpentrySectionOn && <p>carpentrySectionOn</p>}
        {techStuffOn && <TechStuff />}
        {nonTechStuff && <NonTechStuff />}
        {socialOn && <Social />}
      </div>

      <style jsx>{`
        .menu,
        .rendered-content {
          grid-row: 2/4;
          margin-left: 1rem;
          opacity: 0.99;
          z-index: 20;
          margin-top: 50px;
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

        .underline {
          border-bottom: solid;
        }

        div.subMenu {
          grid-column: 2/4;
          padding-left: 1rem;
        }

        h4 {
          margin-bottom: 0;
        }

        button {
          background: none;
          border: none;
          line-height: 1.5rem;
          color: var(--blueish);
          cursor: pointer;

          padding-left: 0;
        }
        button:after {
          content: " >";
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

        .skills {
          display: flex;
        }
      `}</style>
    </>
  );
};

export default Accordian;
