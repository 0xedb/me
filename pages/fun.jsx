import {PAGE} from '../util/pages';
import HeadMeta from '../components/HeadMeta';
import Page from '../components/Page';

function fun() {
    return (
        <>
    <div id="thebashshell">
      <HeadMeta>
        <title>Bruno Edoh | theBashShell</title>
      </HeadMeta>
      <Page name={PAGE.FUN} />
    </div> 
  </>       
    )
}

export default fun
