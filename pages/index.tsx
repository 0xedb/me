import HeadMeta from "../components/HeadMeta";
import Navbar from "../components/Navbar";
import Page from "../components/Page";

const style = (
  <>
    <style jsx>{`
      div {
        height: 100vh;
      }
    `}</style>

    <style global jsx>{`
      .min {
        min-width: 300px;
      }

      .centered {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </>
);

const Index = () => (
  <>
    <div>
      <HeadMeta>
        <title>Bruno Edoh | theBashShell</title>
      </HeadMeta>
      <Navbar />
      <Page />
    </div>
    {style}
  </>
);

export default Index;
