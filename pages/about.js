import Title from "../components/Title";
import Accordian from "../components/Accordian";
import Layout from "../components/MyLayout";
export default () => {
  return (
    <Layout
      bgImg="../static/bg-landscape-bridge.png"
      bgImgSm="../static/bg-profile-bridge.png">
      <Title name={"About Me"} />

      <Accordian />
    </Layout>
  );
};
