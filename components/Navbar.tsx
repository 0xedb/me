import {useState} from 'react';
import Overlay from './Overlay';

const style = (
  <style jsx>{`
    .navbar-side {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .brand-logo {
      opacity: 0.4;
      font-size: 30px;
      font-family: 'Caveat', cursive;
      font-weight: bolder;
    }

    .tabs {
      position: sticky;
      top: 0;
      background: rgb(255, 254, 251);
    }

    nav {
      width: 100%;
      background: transparent;
      padding: 3px;
    }

    .black_color {
      color: black !important;
    }

    .black_bg {
      background: #191a1e;
    }

    .white_color {
      color: white !important;
    }

    @media (min-width: 700px) {
      .brand-logo {
        font-size: 40px;
        padding-top: 4px;
      }
    }
  `}</style>
);

function Navbar() {
  const [overlay, setOverlay] = useState(false);

  const handleMenu = () => {
    setOverlay(prev => !prev);
  };

  return (
    <>
      <nav className={`${overlay ? 'black_bg' : ''}`}>
        <div className="navbar-side">
          <div className="navbar-item">
            <a
              href="#"
              className={`brand-logo ${
                overlay ? 'white_color' : 'black_color'
              }`}
            >
              {`<bruno />`}
            </a>
          </div>
        </div>
      </nav>
      <div className="tabs is-centered">
        <ul>
          <li className="">
            <a>about</a>
          </li>
          <li>
            <a>work</a>
          </li>
          <li>
            <a>fun</a>
          </li>
          <li>
            <a>blog</a>
          </li>
        </ul>
      </div>
      {style}
    </>
  );
}

export default Navbar;
 
