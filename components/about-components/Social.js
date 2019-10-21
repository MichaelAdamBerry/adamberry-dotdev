import React from "react";

const Social = () => {
  return (
    <>
      <div className="social">
        <div>
          <a href="https://twitter.com/_Adam_Berry">
            <button className="twitter">Tweets</button>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/michael_adam_berry/">
            <button className="instagram">Pics</button>
          </a>
        </div>{" "}
        <div>
          <a href="">
            <button className="linkedin">Career</button>
          </a>
        </div>
        <div>
          <a href="https://github.com/MichaelAdamBerry">
            <button className="github">Code</button>
          </a>
        </div>
      </div>
      <style jsx>{`
        button {
          width: 6rem;
          height: 2.5rem;
          box-shadow: 0px 0px 5px #2f2f2f44;
          border-radius: 5px;
          color: white;
          font-size: 1.5rem;
          line-height: 2rem;
        }

        a {
          text-decoration: none;
          color: unset;
        }

        .social {
            display: flex;
            justify-content: space-between;
            max-width: 30rem;
            margin: auto
        }

        .social div {
          margin-top: 2rem;

        }

        a, button {
            cursor: pointer;
        } 

        button:focus {
            outline: none;
        }
        .twitter {
            background-color: rgb(29, 161, 242)        }
        }

        .linkedin {
          background-color: #0077B5;
        }

        .instagram {
          background-color: #C13584;
        }

        .github {
            background-color: black;
        }

        @media(max-width: 425px) {

          .social {
            display: block;
          }

          button, .social div {
            width: 8rem;
          }

          .social div {
            
    margin: auto;
    margin-bottom: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default Social;
