import { useState } from "react";

const style = (
  <style jsx>{`
    a {
      transition: all 0.2s ease;
      font-family: "Quicksand", sans-serif;
    }

    .overlay {
      position: relative;
      width: 100vw;
      height: 0vh;
      background: #191a1e;
      z-index: 80;
      opacity: 0;
      transition: all 0.6s ease 0.1s;
    }

    .is-active {
      height: 100vh;
      opacity: 1;
    }

    nav {
      z-index: 100;
      box-shadow: 0 2px 2px 0 #dadada24,
        0 3px 1px -2px #efefef1f,
        0 1px 5px 0 #e2e2e233;
      background-color: #ffffff;
    }

    nav ul a:hover {
      background-color: unset;
    }

    .brand-logo {
      opacity: 0.4;
    }

    .brand-logo.left {
      left: 30px;
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
        <nav className={overlay ? "black_bg" : ""}>
          <div className="navbar-wrapper">
            <a
              href="#"
              className={`brand-logo ${
                overlay ? "white_color" : "black_color"
              } center`}
            >
              {`<bruno />`}
            </a>
            <ul className="right">
              <li>
                <a href="#">
                  <i
                    className={`material-icons ${
                      overlay ? "white_color" : "black_color"
                    }`}
                    onClick={handleMenu}
                  >
                    {overlay ? "close" : "sort"}
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className={`overlay ${overlay ? "is-active" : ""}`}></div>
      </div>
      {style}
    </>
  );
}

export default Navbar;
