import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(faPhone, faEnvelope, fab);

const iconStyles = {
  width: "1em",
  height: "1em"
};

export default () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h4>Contact</h4>
        <div className="contact-info">
          <div className="item">
            <a href="tel:+01-270-314-7807" rel="nofollow">
              <FontAwesomeIcon icon={faPhone} style={iconStyles} />
            </a>
          </div>
          <div className="item">
            <a href="mailto:me@adamberry.dev">
              <FontAwesomeIcon icon={faEnvelope} style={iconStyles} />
            </a>
          </div>
          <div className="item">
            <a href="https://github.com/michaeladamberry">
              <FontAwesomeIcon icon={["fab", "github"]} style={iconStyles} />
            </a>
          </div>
          <div className="item">
            <a href="https://linkedin/in/michaeladamberry">
              <FontAwesomeIcon icon={["fab", "linkedin"]} style={iconStyles} />
            </a>
          </div>
          <div className="item">
            <a href="https://twitter.com/michaeladamberry">
              <FontAwesomeIcon icon={["fab", "twitter"]} style={iconStyles} />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
          link-style: none;
          color: var(--main-dark-blue);
        }
        .contact {
          background-color: var(--main-background);
          grid-row: 2;
          grid-column: 4;
          height: max-content;
          z-index: 100;
          font-family: "Teko", sans-serif;
          align-content: center;
          align-self: center;
        }

        .contact-container {
          border-left: solid 5px;
          margin-left: calc(15% - 5px);
        }

        .contact-info {
          display: flex;
          font-size: 17px;
          justify-content: center;
          height: max-content;
        }
        .item {
          margin: 0 0.5em 0.5em 0.5em;
        }

        .contact h4 {
          text-align: center;
          font-size: 2em;
          margin: 0;
        }

        svg {
          color: var(--main-dark-blue);
        }

        @media (min-width: 481px) and (max-width: 900px) {
          .contact-container {
            margin-left: 0;
          }
        }

        @media (min-width: 320px) and (max-width: 480px) {
          .contact-container {
            margin-left: 0;
            border-left: none;
          }
        }
      `}</style>
    </div>
  );
};
