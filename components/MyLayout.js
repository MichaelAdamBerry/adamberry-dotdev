import Head from "next/head";

export default function Layout(props) {
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
        {props.children}
        <style jsx>{`
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
        `}</style>
      </div>
    </>
  );
}
