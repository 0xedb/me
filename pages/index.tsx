import HeadMeta from "../components/HeadMeta"; 
import Page from "../components/Page";

const style = (
  <>
    <style jsx>{`
      #thebashshell {
        height: 100%;
      }
    `}</style>

    <style global jsx>{`
      *,
      ::before,
      ::after {
        box-sizing: border-box;
        transition: all 0.4s ease 0.1s;
      }

      html {
        scroll-behavior: smooth;
      }

      html,
      body {
        height: 100vh;
        margin: 0px;
        padding: 0px;
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

      .enlarge {
        transition: all 0.5s ease 0.1s;
      }

      .enlarge:hover {
        transform: scale(1.3);
        filter: grayscale(1);
        transition: all 0.7s ease 0.1s;
      }
    `}</style>
  </>
);

const Index = () => (
  <>
    <div id="thebashshell">
      <HeadMeta>
        <title>Bruno Edoh | theBashShell</title>
      </HeadMeta>
      <Page />
    </div>
    {style}
  </>
);

export default Index;
