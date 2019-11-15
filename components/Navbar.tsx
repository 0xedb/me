import {useState} from 'react';
import Overlay from './Overlay';

const style = (
  <style jsx>{`
    a {
      font-family: 'Quicksand', sans-serif;
      color: #ffff;
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
    .navbar-side {
      width: 100%;
      display: flex;
      flex-flow: row-reverse;
      justify-content: center;
    }

    .brand-logo {
      opacity: 0.4;
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

        <div className={`overlay centered ${overlay ? 'overlay-active' : ''}`}>
          <Overlay show={overlay ? true : false} />
        </div>
      </nav>
      {style}
    </>
  );
}

export default Navbar;


// <div className="navbar-side">
//             <div className="navbar-item" onClick={handleMenu}>
//               <a>
//                 <i
//                   className={` material-icons  ${
//                     overlay ? 'white_color' : 'black_color'
//                   }`}
//                 >
//                   {overlay ? 'close' : 'sort'}
//                 </i>
//               </a>
//             </div>
//           </div>