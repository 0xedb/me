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
      flex-flow: row wrap;
    }

    @media (min-width: 700px) {
      .social {
        position: absolute;
        left: 10px;
        flex-flow: column nowrap;
      }
    }

    .social img {
      width: 40px;
      transition: all 0.5s ease 0.1s;
      padding: 3px 0;
    }

    .social img:hover {
      transform: scale(1.3);
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
            <a href="https://github.com/theBashShell" target="_blank">
              <img src="https://img.icons8.com/windows/32/000000/github.png" />
            </a>
            <a href="https://www.linkedin.com/in/bruno-edoh/" target="_blank">
              <img src="https://img.icons8.com/windows/32/000000/linkedin-2.png" />
            </a>
            <a href="https://twitter.com/theBashShell" target="_blank">
              <img src="https://img.icons8.com/windows/48/000000/twitter.png" />
            </a>
            <a
              href="https://stackoverflow.com/users/6790436/thebashshell"
              target="_blank"
            >
              <img src="https://img.icons8.com/windows/32/000000/stackoverflow.png" />
            </a>
            <a href="https://www.instagram.com/thebashshell/" target="_blank">
              <img src="https://img.icons8.com/windows/48/000000/instagram.png" />
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
