import {gsap} from 'gsap';
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
      opacity: 0;
      font-size: 30px;
      font-family: 'Caveat', cursive;
      font-weight: bolder;
    }

    .tabs {
      position: sticky;
      top: 0;
      background: #ffff;
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

  const handleMenu = () => {
    setOverlay(prev => !prev);
  };

  useEffect(() => {
    gsap.to(navRef.current as HTMLAnchorElement, {
      duration: 1,
      ease: 'slow',
      opacity: 0.8,   
    });
  }, []);

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
