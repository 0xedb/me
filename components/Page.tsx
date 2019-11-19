import Navbar from './Navbar'; 
import NavTab from './NavTab';
import {getPage, PAGE} from '../util/pages';


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

  <style>{`
  .social {
    flex-flow: row wrap;
  }

  .social img {
    width: 40px;  
    transition: all 0.5s ease 0.1s;
    padding: 7px 7px;
    padding-top: 18px;
  }

  .social img:hover {
    transform: scale(1.3);
    filter: grayscale(1);
    transition: all 0.5s ease 0.1s;
  }
 
  @media (min-width: 700px) {
    .social {
      position: fixed;
      left: 22px;
      flex-flow: column nowrap;
      top: 30%;
    }

    .social img {
      padding-top: 5px; 
    }
  }
`}</style>
</>
);

export const Social = () =>  <div className="social centered">
<a href="https://github.com/theBashShell" target="_blank">
  <img src="https://api.iconify.design/logos:github-icon.svg" />
</a>
<a href="https://www.linkedin.com/in/bruno-edoh/" target="_blank">
  <img src="https://api.iconify.design/ps:linkedin.svg" />
</a>
<a href="https://twitter.com/theBashShell" target="_blank">
  <img src="https://api.iconify.design/dashicons:twitter.svg" />
</a>
<a
  href="https://stackoverflow.com/users/6790436/thebashshell"
  target="_blank"
>
  <img src="https://api.iconify.design/simple-icons:stackoverflow.svg" />
</a>
<a href="https://www.instagram.com/thebashshell/" target="_blank">
  <img src="https://api.iconify.design/ion:logo-instagram.svg" />
</a>
<a href='https://codesandbox.io/u/theBashShell' target="_blank">
<img src='https://api.iconify.design/logos-codesandbox.svg' />
</a>
</div>

function Page({name}: Props) {
  const Component = getPage(name); 

  return (
    <>
      <Navbar />
      <NavTab /> 
      <Component />
      {style}
    </>
  );
}

export default Page;
