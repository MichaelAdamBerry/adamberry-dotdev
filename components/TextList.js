export default () => (
  <div className="container">
    <div className="border" />
    <div className="text-content">
      <div className="about">
        I build complex user interfaces. Passionate about front end development
        and creating sites that people don't want to leave. My ideal Saturday is
        taking something apart and then putting it back together to see how it
        works.
      </div>
    </div>
    <p>SKILLS</p>
    <div className="list">
      <ul>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS3 / Grid / Flexbox</li>
        <li>Bootstrap</li>
        <li>JQuery</li>
        <li>React / Redux</li>
        <li>Node / Express</li>
        <li>Python</li>
      </ul>
    </div>

    <div className="text-filter" />
    <style jsx>{`
      .container {
        color: var(--main-dark-blue);
        font-family: "Amiri", serif;
        margin-top: 1em;
        width: 100%;
        display: grid;
        grid-template-rows: 40px 1fr;
        grid-template-columns: 7% 20% 24% 43% 7%;
      }

      p {
        font-family: "Teko", sans-serif;
        grid-row: 1;
        grid-column: 2;
        font-size: 35px;
        margin-block-start: 0;
        margin-bottom: 0;
      }

      .list {
        grid-column: 2/3;
        grid-row: 2;
        display: flex;
        align-items: center;
      }

      ul {
        font-size: 1em;
        font-weight: bold;
        padding-inline-start: 4em;
        list-style: none;
        padding-right: 1em;
      }

      li {
        line-height: 1em;
      }

      .border {
        margin-top: 0.5em;
        border-top: solid;
        grid-column: 2/ 5;
        grid-row: 2;
      }

      .text-content {
        grid-column: 3/4;
        grid-row: 2;
        display: flex;
        align-items: center;
      }

      .about {
        margin-top: 1em;
        margin-right: 5%;
        font-size: 1em;
      }

      .text-filter {
        grid-column: 2/4;
        grid-row: 2;
        background-color: var(--main-light-blue);
        opacity: 0.4;
      }

      @media (min-width: 1025px) and (max-width: 1280px) {
        .container {
          grid-template-columns: 7% 30% 30% 26% 7%;
        }
      }

      @media (min-width: 320px) and (max-width: 480px) {
        .container {
          display: block;
        }
        .list {
          box-shadow: 2px 2px;
          margin-top: 1em;
        }
        p {
          margin-bottom: 0;

          margin-top: 1em;
        }
        ul {
          margin-top: 0;
        }

        li {
          line-height: normal;
        }
      }

      @media (min-width: 481px) and (max-width: 900px) {
        .container {
          grid-template-columns: 7% 40% 33% 13% 7%;
        }
      }

      @media (min-width: 2000px) and (max-width: 5000px) {
        .container {
          width: 1800px;
          margin: auto;
        }
      }
    `}</style>
  </div>
);
