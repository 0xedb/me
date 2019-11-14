import {SyntheticEvent} from 'react';

const style = (
  <style>{`
    .overlay-container {
        width: 100%;
        height: 100%;
        padding-top: 68px;
        color: white;
        justify-content: right;
        align-items: flex-end;
        padding-right: 40px;
        position: relative;
        top: 15%;
    }

    .link_nav a {
        font-size: 30px;
        font-family: 'Quicksand', sans-serif;
    }

    .effect:hover {
        text-transform: capitalize;
        color: gold;
        font-weight: bold;
    }

    .aside-info {
        visibility: hidden;
        display: none;
    }

    @media(min-width: 700px) {
        .overlay-container {
            top: 25%;
            padding-right: 90px;
        }

        .aside-info {
            display: block;
            visibility: unset;
            position: absolute;
            top: 10%;
            right: 40%;
        }

        .aside-info img {
            width: 370px;
            border-radius: 50%;
            mix-blend-mode: darken;
            background: wheat;  
            transform-origin: top;
            height: 0px;  
            transform: translateY(-100%);
            transition: all 1s ease-in 1s;         
        }

        .show { 
            height: 370px !important;
            transform: translateY(-32%) !important;
            
        }

        .hide { 
            display:none;
            visibility: hidden;
            height: 0px;             
        }
 
    }
 `}</style>
);

interface Props {
  show?: boolean;
}

function Overlay({show}: Props) {
  const handleLinkClick = (event: SyntheticEvent) => {
    console.log(event);
  };

  return (
    <>
      <div className="overlay-container centered">
        <div className="aside-info">
          <div>
            <img
              src="/images/me_alt.png"
              alt="me"
              className={`${show ? 'show' : 'hide'}`}
            />
          </div>
        </div>
        <div className="links" onClick={handleLinkClick}>
          <ul className="centered link_nav">
            <li>
              <a className="effect enlarge" href="#">
                about
              </a>
            </li>
            <li>
              <a className="enlarge effect" href="#">
                work
              </a>
            </li>
            <li>
              <a className="enlarge effect" href="#">
                fun
              </a>
            </li>
            <li>
              <a className="enlarge effect" href="#">
                blog
              </a>
            </li>
          </ul>
        </div>
      </div>
      {style}
    </>
  );
}

export default Overlay;
