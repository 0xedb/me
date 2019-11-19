
import {useState, useRef, useEffect} from 'react';

const style = (
  <style jsx>{`
    .navbar-side {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    a {
      text-decoration: none;
    }

    .brand-logo {
      font-size: 30px;
      font-family: 'Caveat', cursive;
      font-weight: bolder;
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
  const navRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    
  });

  return (
    <>
      <nav className={`${overlay ? 'black_bg' : ''}`}>
        <div className="navbar-side"> 
            <a
              ref={navRef}
              href="#"
              className={`brand-logo ${
                overlay ? 'white_color' : 'black_color'
              }`}
            >
              {`<bruno />`}
            </a> 
        </div>
      </nav>
      {style}
    </>
  );
}

export default Navbar;
