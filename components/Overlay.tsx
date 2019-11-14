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

    .link-nav a {
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
            height: 370px;
            border-radius: 50%;
            mix-blend-mode: darken;
            background: wheat;
        }
 
    }
 `}</style>
);

function Overlay() {
  return (
    <>
      <div className="overlay-container centered">
        <div className="aside-info">
          <div>
            <img src="/images/me_alt.png" alt="me" />
          </div> 
        </div>
        <div className="links">
          <ul className="centered link-nav">
            <li>
              <a className="enlarge effect" href="#">
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
