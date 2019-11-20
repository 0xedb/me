import Navbar from './Navbar'; 
import NavTab from './NavTab';
import {getPage, PAGE} from '../util/pages';
import config from 'react-reveal/globals';
import Slide from 'react-reveal/Slide';
 

config({ ssrFadeout: true });

interface Props  {
  name: PAGE;
  title?: string;
}

const style = (
  <>

  <style global jsx>
  {`
  *,
      ::before,
      ::after {
        box-sizing: border-box; 
      }
      #thebashshell {
        height: 100%;
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

      @keyframes scale-up {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(3);
            opacity: 0;
        }
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
 `}
  </style>

  <style jsx>{`
 
  @media (min-width: 700px) {
     
  }
`}</style>
</>
);

function Page({name}: Props) {
  const Component = getPage(name); 

  return (

    <div>
      <Navbar />
      <NavTab /> 
      <Component />
      {style}
    </div>
  );
}

export default Page;
