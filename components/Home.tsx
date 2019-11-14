const style = (
  <style jsx>{`
    #home {
      position: relative;
      background: rgb(255, 254, 252);
      height: 100%;
      top: -10px;
      padding-top: 50px;
    }

    .intro {
      width: 100%;
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
      font-size: 16px;
      font-family: "Montserrat", sans-serif;
      text-align: center;
    }

    .description {
      font-family: "Ubuntu", sans-serif;
      font-size: 33px;
      text-align: center;
      max-width: 560px;
    }

    .standout {
      color: #ff9800;
    }

    .verified {
      width: 18px;
      height: 18px;
    }

    .myself {
      width: 100%;
      height: 440px;
    }

    .myself_img {
      object-fit: cover;
      object-position: center 1%;
      width: 100%;
      max-width: 450px;
      height: 100%;
    }

    .content {
      background: #292929;
      width: 100%;
      color: #f5f5f5;
      max-width: 450px;
    }

    .content h2 {
      font-family: "Quicksand", sans-serif;
    }

    @media (min-width: 700px) {
      .social {
        position: fixed;
        left: 22px;
        flex-flow: column nowrap;
        margin-top: 50px;
      }

      .social img {
        padding-top: 5px;
      }

      .myself {
        width: 80%;
        max-width: 635px;
        height: 660px;
      }

      .myself_img {
        max-width: unset;
      }

      .content {
        width: 80%;
        max-width: 635px;
      }
    }
  `}</style>
);

function Home() {
  return (
    <>
      <div id="home" className="centered min">
        <div className="intro centered min">
          <h1 className="title min">Full Stack Software Engineer</h1>
          <div>
            <img
              className="verified"
              src="https://img.icons8.com/color/32/000000/verified-account.png"
            />
          </div>
          <p className="description">
            I design and develop &nbsp;
            <span className="standout">
              wonderful
              <span>
                <sup>&#8734; &nbsp;</sup>
              </span>
            </span>
            apps
          </p>
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
        <div className="myself centered">
          <picture className="myself_img">
            <source srcSet="/images/myself1.png" media="(min-width: 700px)" />
            <img
              className="myself_img"
              src="/images/myself0.png"
              alt="bruno edoh"
            />
          </picture>
        </div>
        <div className="content">
          <h2>Can I Help You?</h2>
          <div>eyyy</div>
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
