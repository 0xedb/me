import {store} from '../util/reducers';
import {Provider} from 'react-redux';
import HeadMeta from '../components/HeadMeta';
import Page from '../components/Page';
import Navbar from '../components/Navbar';

const Index = () => (
  <>
    <HeadMeta title="theBashShell | Bruno Edoh" />
    <Provider store={store}>
      <div className="page min">
        <div className="">
          <Navbar />
          <Page />
        </div>
      </div>
    </Provider>
  </>
);


export default Index;
