import Head from "next/head";

export default function Layout({ children, bgImg, bgImgSm }) {
  return (
    <>
      <Head>
        <title>Michael Adam Berry || Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/static/favicon.ico"
          className="next-head"
        />
        <link
          href="https://fonts.googleapis.com/css?family=BenchNine|Amiri|Teko:300|Nunito:400,800"
          rel="stylesheet"
        />
      </Head>
      <div className="main">
        <div className="site-container">{children}</div>

        <style jsx global>{`
          body {
            margin: 0;
          }
          .main {
            width: 100%;
            margin: 0;
          }
          .main {
            background-color: var(--main-background);
          }

          :root {
            --purp: #861657;
            --sunshine: #fff000;
            --blueish: #015463;
          }

          .site-container {
            min-height: 100vh;
            max-height: 100vh;
            overflow-y: scroll;
            background-image: url(${bgImg});
            background-size: cover;
            background-position: top;
            display: grid;
            grid-template-columns: 10rem 1fr 1fr 1fr auto;
            grid-template-rows: 15vh auto auto auto 5vh;
            font-family: "Nunito", sans-serif;
            font-weight: 200;
            color: #bfb5b5;
          }

          @media (max-width: 800px) {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          }

          @media (max-width: 425px) {
            .site-container {
              background-image: url(${bgImgSm ? bgImgSm : bgImg});
            }
          }
        `}</style>
      </div>
    </>
  );
}
