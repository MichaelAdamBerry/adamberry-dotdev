import Nav from "../components/Nav";
import Title from "../components/Title";
import Accordian from "../components/Accordian";
import MobileNav from "../components/MobileNav";
import Layout from "../components/MyLayout";
export default () => {
  return (
    <Layout
      bgImg="../static/bg-landscape-bridge.png"
      bgImgSm="../static/bg-portrait-bridge.png">
      <Title name={"About Me"} />
      <Nav current="about" />
      <MobileNav />

      <Accordian />

      <style jsx>{`
        color: white;
        h3 {
          font-weight: 200;
          font-size: 1.4rem;
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: #f6d327;
        }

        p {
          line-height: 1.75rem;
          font-size: 1.1rem;
        }

        p:first-letter {
          font-size: 1.75rem;
          color: #f6d327;
        }

        .content {
          grid-row: 3/4;
          grid-column: 1/6;

          align-self: start;
          justify-self: center;
          margin-top: 50px;
          opacity: 0.99;
          z-index: 20;
        }

        .bio-main {
          grid-column: 1/2;
          grid-row: 2/3;
          max-width: 400px;
          opacity: 0.99;
          z-index: 21;
        }

        img {
          border: solid white;
          border-radius: 50%;
          margin: 25px 1rem;
          float: right;
          shape-outside: circle(50%);
        }

        @media (max-width: 425px) {
          .social {
            grid-row: 5/6;
          }
          .content {
            grid-row: 3/4;
          }
          p.text {
            color: #f6d327;
          }

          .content {
            grid-column: 1/6;
            justify-self: start;
            margin-left: 1rem;
            padding-left: 0;
          }

          .img-container {
            justify-self: center;
            align-self: center;
          }
        }
      `}</style>
    </Layout>
  );
};
