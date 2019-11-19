import {PAGE} from '../util/pages';
import HeadMeta from '../components/HeadMeta';
import Page from '../components/Page';

function Blog() {
    return (
        <>
    <div id="thebashshell">
      <HeadMeta>
        <title>Bruno Edoh | theBashShell</title>
      </HeadMeta>
      <Page name={PAGE.BLOG} />
    </div> 
  </>       
    )
}

export default Blog
