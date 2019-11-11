import {useState} from 'react';

const style = (
  <style jsx>{`
    .overlay {
      position: relative;
      width: 100vw;
      height: 0vh;
      background: #191a1e;
      z-index: 80;
      transition: all 0.6s ease 0.1s;
    }

    .is-active {
      height: 100vh;
    }

    nav {
      z-index: 100;
      box-shadow: none;
      background-color: transparent;
    }

    nav .brand-logo,
    nav i {
      color: black;
      mix-blend-mode: difference;
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
      <div className="navbar-fixed min">
        <nav>
          <div className="navbar-wrapper">
            <a href="#" className="brand-logo left">
              Bruno
            </a>
            <ul className="right">
              <li>
                <a href="#">
                  <i className="material-icons" onClick={handleMenu}>
                    {overlay ? 'clear' : 'sort'}
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className={`overlay ${overlay ? 'is-active' : ''}`}></div>
      </div>
      {style}
    </>
  );
}

export default Navbar;
