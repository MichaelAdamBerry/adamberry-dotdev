import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>My_Reps2.0</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=BenchNine|Amiri|Teko:300"
          rel="stylesheet"
        />
      </Head>
      <div className="main">
        {props.children}
        <style jsx>{`
          .main {
            width: 100%;
          }
          

          .main {
            background-color: var(--main-background);
          }
        `}</style>
      </div>
    </>
  );
}
