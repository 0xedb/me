
const style = (
  <style jsx>{`
    #home {
      height: 100%;
    }

    .intro {
      width: 100%;
      padding: 20px;
    }

    

    .title {
      text-transform: capitalize;
      color: #02020270;
      font-size: 16px;
      font-family: 'Monda', sans-serif;
      text-align: center;
    }

    .description {
      font-family: 'Ubuntu', sans-serif;
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
      font-family: 'Quicksand', sans-serif;
      padding: 20px;
    }

    sup {
      top: -0.7em;
      right: 0px;
      z-index: -1;
    }

    @media (min-width: 700px) { 

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
          <h1 className="title min">
            Full Stack Software Engineer &nbsp;
            <img
              className="verified"
              src="https://img.icons8.com/color/32/000000/verified-account.png"
            />
          </h1>
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
          <h2 className="is-medium">I'm Bruno</h2>
          <p>Have an interesting idea/project you wanna discuss?</p>
          
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
