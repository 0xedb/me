const style = (
  <style jsx>{`
    #home {
      position: relative;
      background: rgb(255, 254, 252);
      height: calc(100vh - 56px);
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

    .social img {
      width: 40px;
      transition: all 0.5s ease 0.1s;
      padding: 7px 0;
      padding-top: 18px;
    }

    .social img:hover {
      transform: scale(1.3);
      filter: grayscale(1);
      transition: all 0.5s ease 0.1s;
    }

    .title {
      text-transform: uppercase;
      color: #02020270;
      font-size: 25px;
    }

    .verified {
      width: 20px;
      height: 20px;
    }

    @media (min-width: 700px) {
      #home {
        height: calc(100vh - 64px);
      }

      .social {
        position: fixed;
        left: 10px;
        flex-flow: column nowrap;
      }

      .social img {
        padding-top: 5px;
      }
    }
  `}</style>
);

function Home() {
  return (
    <>
      <div id="home">
        <div className="intro centered">
          <h1 className="title">
            Full Stack Software Engineer
            <img
              className="verified"
              src="https://img.icons8.com/color/32/000000/verified-account.png"
            />
          </h1>
          <p>adkldafsj</p>
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
          GitHub, LinkedIn, Twitter, Instagram, Stack Overflow, Verified Account
          icons by Icons8
        </a>
      </div>
    </>
  );
}

export default Home;
