const style = (
  <style jsx>{`
    #home {
      position: relative;
      background: rgb(255, 254, 252);
      height: calc(100vh - 56px);
    }

    @media (min-width: 700px) {
      #home {
        height: calc(100vh - 64px);
      }
    }

    .intro {
      width: 100%;
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%);
      background: rgb(255, 255, 255);
      padding: 20px;
    }

    .social {
      position: absolute;
      left: 10px;
    }

    .social img {
      width: 50px;
      transition: all 0.5s ease 0.1s;
    }

    .social img:hover {
      transform: scale(1.2);
      filter: blur(0.1);
      transition: all 0.5s ease 0.1s;
    }
  `}</style>
);

function Home() {
  return (
    <>
      <div id="home">
        <div className="intro centered">
          this is nice
          <div className="social centered">
            <a href="#">
              <img src="https://img.icons8.com/nolan/64/000000/github.png" />
            </a>
            <a href="#">
              <img src="https://img.icons8.com/nolan/64/000000/twitter.png" />
            </a>
            <a href="#">
              <img src="https://img.icons8.com/nolan/64/000000/linkedin.png" />
            </a>
            <a href="#">
              <img src="https://img.icons8.com/nolan/64/000000/instagram-new.png" />
            </a>
          </div>
        </div>
      </div>
      {style}

      <div className="credit">
        <a href="https://icons8.com">
          GitHub, LinkedIn, Twitter, Instagram icons by Icons8
        </a>
      </div>
    </>
  );
}

export default Home;
