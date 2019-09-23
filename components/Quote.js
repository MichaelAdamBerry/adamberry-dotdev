import React from "react";

const Quote = () => {
  return (
    <>
      <div className="quote-mark">
        <img alt="large quotation mark" src="../static/quote-mark-light.svg" />
      </div>
      <div className="quote">
        <p> Make great things and then make them better</p>
      </div>{" "}
      <style jsx>{`
        .quote,
        .quote-mark {
          grid-column: 2/5;
          grid-row: 5/6;
          justify-self: start;
          align-self: center;
          font-size: 1.3rem;
          color: white;
        }
        .quote-mark {
          width: 2.7rem;
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
            margin-left: 0.5rem;
          }

          .quote-mark,
          .quote {
            grid-column: 1/6;
            align-self: start;
          }
        }
      `}</style>
    </>
  );
};

export default Quote;
