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
      * {
        transition: all 0.4s ease 0.1s;
      }

      html, body {
        height: 100vh;
      }

      .min {
        min-width: 300px;
      }

      .centered {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
      }

      .credit {
        display: none;
        visibility: hidden;
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
