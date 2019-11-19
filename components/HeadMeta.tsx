import {Helmet} from 'react-helmet';
import 'antd/dist/antd.css';
interface Props {
  children?: JSX.Element;
}

function HeadMeta({children}: Props) {
  return (
    <Helmet>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" type="text/css" href="/css/normalize.css" /> 
      <link
        href="https://fonts.googleapis.com/css?family=Monda|Caveat|Quicksand|Ubuntu:700&display=swap"
        rel="stylesheet"
      /> 
      {children}
    </Helmet>
  );
}

export default HeadMeta;
