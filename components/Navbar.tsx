import {useState} from 'react';
import Overlay from './Overlay';

const style = (
  <style jsx>{`
    a {
      font-family: 'Quicksand', sans-serif;
    }

    .overlay {
      position: absolute;
      width: 100%;
      height: 0vh;
      background: #191a1e;
      z-index: -20;
      opacity: 0;
      transition: all 0.6s ease-in-out;
    }

    .overlay-active {
      height: 100vh;
      opacity: 1;
    }

    nav {
      box-shadow: 0 2px 2px 0 #dadada24, 0 3px 1px -2px #efefef1f,
        0 1px 5px 0 #e2e2e233;
    }

    .navbar-side {
      width: 100%;
      display: flex;
      flex-flow: row-reverse nowrap;
    }

    .brand-logo {
      opacity: 0.4;
    }

    .navbar-menu {
      background: transparent;
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
      <nav className={`navbar is-fixed-top ${overlay ? 'black_bg' : ''}`}>
        <div className="navbar-brand">
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
          <div className="navbar-side">
            <div className="navbar-menu is-active">
              <div className="navbar-end is-right">
                <div className="navbar-item" onClick={handleMenu}>
                  <a>
                    <i
                      className={` material-icons  ${
                        overlay ? 'white_color' : 'black_color'
                      }`}
                    >
                      {overlay ? 'close' : 'sort'}
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`overlay centered ${overlay ? 'overlay-active' : ''}`}>
          <Overlay show={overlay ? true : false} />
        </div>
      </nav>
      {style}
    </>
  );
}

export default Navbar;
