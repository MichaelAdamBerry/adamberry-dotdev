import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Spring, config } from "react-spring";
library.add(fab, faLongArrowAltRight);

export default class Card extends React.Component {
  state = { hovered: false };

  setHover = () => this.setState({ hovered: true });
  cancelHover = () => this.setState({ hovered: false });

  render() {
    const { title, text, tools, tags } = this.props;
    const { hovered } = this.state;
    const link = title === "my_reps" || "Grateful Data" ? "project" : "code";
    return (
      <div
        onMouseOver={this.setHover}
        onMouseLeave={this.cancelHover}
        className="card">
        <div className="sidebar" />
        <div className="card-main">
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="tags">{tags.join(", ")}</div>
          <div className="content">
            <p>{text}</p>
          </div>
          <div className="tools">
            <h4>{tools.join(" | ")}</h4>
          </div>
          <Spring
            to={{
              marginLeft: hovered ? "3em" : "0",
              textUnderline: hovered ? "underline" : "none",
              size: hovered ? "1.3em;" : "1em",
              color: hovered
                ? "var(--main-dark-blue)"
                : "var(--main-light-blue)"
            }}
            config={config.wobbly}>
            {({ marginLeft, textUnderline, size, color }) => (
              <div
                className="arrow"
                style={{
                  marginLeft: marginLeft,
                  color: color,
                  textDecoration: textUnderline
                }}>
                <span style={{ fontSize: size }}>{`view ${link} `}</span>
                <FontAwesomeIcon
                  icon={faLongArrowAltRight}
                  style={{
                    width: size,
                    height: size,
                    marginLeft: size
                  }}
                />
              </div>
            )}
          </Spring>
        </div>
        <style jsx>{`
          .card {
            cursor: hover;
            background-color: var(--main-background);
            font-size: 17px;
            display: grid;
            grid-template-columns: 15% 85%;
            grid-template-rows: 40px;
          }

          .arrow {
            font-style: italic;
            padding: 1em 0 1.5em 0;
            max-height: 1em;
          }

          .tags {
            color: var(--main-light-blue);
            font-size: small;
            font-style: italic;
            width: 70%;
            margin: auto;
          }

          .tools {
            grid-column: 2;
            justify-self: center;
          }

          .tools h4 {
            margin: 0px auto 0px auto;
          }

          .sidebar {
            font-size: 17px;
            grid-column: 1;
            grid-row: 1/ 4;
            border-right: solid 5px;
            max-width: 45px;
          }

          h3 {
            font-family: "Teko", sans-serif;
            text-align: center;
            margin: 0 auto 0 auto;
          }

          .title {
            font-size: 2em;
          }

          .vert h4 {
            writing-mode: tb;
            margin-block-end: 3px;
            white-space: nowrap;
            display: none;
          }

          .card-main {
            grid-column: 2;
            grid-row: 1/4;
            display: flex;
            flex-direction: column;
            text-align: center;
          }

          .content {
            margin: 0 0.5em 0 0.5em;
            text-align: left;
          }
          @media (min-width: 765px) and (max-width: 1024px) {
            .card {
              font-size: 14px;
            }
          }

          @media (min-width: 320px) and (max-width: 480px) {
            .card {
              grid-template-columns: 10% 90%;
              width: 100vw;
              border-bottom: solid;
              min-height: 100vh;
            }
            .vert {
              background-color: var(--main-light-blue);
              justify-self: unset;
              opacity: 0.5;
            }
            .sidebar {
              z-index: 2;
            }
            .card-main {
              padding-top: 1em;
              justify-content: center;
              padding-left: 1em;
            }
            .tags {
              margin: 0;
              width: 100%;
              text-align: center;
            }
          }
          @media (min-width: 481px) and (max-width: 900px) {
            .card {
              font-size: 12px;
              grid-template-columns: 0% 100%;
              min-width: 170px;
              border-left: solid 5px;
            }

            .vert,
            .sidebar,
            .vert h4 {
              display: none;
            }
          }
        `}</style>
      </div>
    );
  }
}
