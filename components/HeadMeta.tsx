import {Helmet} from 'react-helmet';
import 'bulma/css/bulma.min.css';

interface Props {
  children?: JSX.Element;
}

function HeadMeta(props: Props) {
  return (
    <Helmet>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" type="text/css" href="/css/normalize.css" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat|Quicksand|Ubuntu:700&display=swap"
        rel="stylesheet"
      />
      <script
        defer
        src="../node_modules/materialize-css/dist/js/materialize.min.js"
      ></script>
    </Helmet>
  );
}

export default HeadMeta;
