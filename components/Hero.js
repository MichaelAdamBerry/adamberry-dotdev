export default () => (
  <div className="container">
    <div className="hero-img">
      <img src="../static/temp-hero.png" />
    </div>
    <div className="hero-filter filter" />
    <div className="header-line teko">
      <p>Web Developer.</p>
    </div>
    <div className="name teko">
      <h1>
        Michael
        <br />
        Adam
        <br />
        Berry
      </h1>
    </div>
    <style jsx>{`
      .container {
        width: 100%;
        display: grid;
        grid-template-columns: 7% 86% 7%;
        grid-template-rows: 10% 75% 5%;
        padding-top: 5%;
        color: var(--main-dark-blue);
      }
      .hero-img {
        grid-row: 2/4;
        grid-column: 1/3;
      }

      .hero-img img {
        width: 100%;
        height: auto;
      }
      .header-line {
        grid-row: 1/2;
        grid-column: 1/3;
        align-self: end;
        margin-left: 4%;
        border-bottom: solid;
        margin-bottom: 2%;
        font-size: 35px;
      }

      .header-line p {
        margin-block-end: 0px;
        text-transform: uppercase;
        
      }

      .hero-filter {
        grid-row: 1/5;
        grid-column: 2/4;
        background-color: var(--main-light-blue);
        z-index: 1;
        opacity: 0.4;
      }

      .name {
        grid-row: 2/4;
        z-index: 2;
        grid-column: 1/3;
      }

      .teko {
          font-family: 'Teko', sans-serif;
      }

      .benchnine {
          font-family: font-family:  'BenchNine', sans-serif; 
      }
      .name h1 {
        font-size: 600%;
        margin-left: 0.5em;
        color: var(--main-light-blue);
      }
      @media (min-width: 320px) and (max-width: 480px) {
       .container {
         margin-top: 8%;
       }
       .name h1 {
         font-size: 200%;
       }

       .hero-img {
         grid-column: 1/4;
         grid-row: 2/4;
         overflow: hidden;
       }

       .hero-img img {
         width: 144%;
         height: auto;
       }

      }

      @media (min-width: 481px) and (max-width: 900px) {
  
        .name h1 {
          margin-block-start: 0;
        }
        .container {
          grid-template-rows: 20% 75% 5%;
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
