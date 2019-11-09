import {Helmet} from 'react-helmet'; 
import 'uikit/dist/css/uikit.min.css'
interface Props {
  title?: string;
}

function HeadMeta(props: Props) {
  return (
    <Helmet>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" /> 
      <link rel='stylesheet' type='text/css' href='/css/app.css' />
      {props.title ? <title>{props.title}</title> : null}
    </Helmet>
  );
}

export default HeadMeta;
