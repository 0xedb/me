import HeadMeta from "../components/HeadMeta"; 
import Page from "../components/Page";
import {PAGE} from '../util/pages'

const style = (
  <>
    <style jsx>{`
      #thebashshell {
        height: 100%;
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
      <Page name={PAGE.HOME} />
    </div>
    {style}
  </>
);

export default Index;
