import Layout from "../components/MyLayout";
import Hero from "../components/Hero";
import Content from "../components/Content";
import TextList from "../components/TextList";
export default () => (
  <Layout>
    <Hero />
    <TextList />
    <Content />
    <style global="true">{`
    :root {
      --main-background: #f9faff;
      --main-dark-blue: #040F62;
      --main-light-blue: #5e77d2;
    }

    .body {
      background-color: var(--main-dark-blue);
    }

    `}</style>
  </Layout>
);
