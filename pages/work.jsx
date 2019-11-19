import {PAGE} from '../util/pages';
import HeadMeta from '../components/HeadMeta';
import Page from '../components/Page';

function work() {
    return (
        <>
    <div id="thebashshell">
      <HeadMeta>
        <title>Bruno Edoh | theBashShell</title>
      </HeadMeta>
      <Page name={PAGE.WORK} />
    </div> 
  </>       
    )
}

export default work
