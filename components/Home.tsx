import Footer from './Footer'
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';  
import config from 'react-reveal/globals'; 
 

config({ ssrFadeout: true });
const style = (
  <style jsx>{`
     

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
      background: #000000;
      width: 100%;
      color: #fdfdfd;
      max-width: 450px;
      font-family: 'Alata', sans-serif;
      padding: 20px;
      font-size: 24px;
    }

    .content h2 {
      color: #ffffff;
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
        font-size: 30px;
      }
    }
  `}</style>
);


const css = <style>{`
    footer div {
      max-width: 450px;
      width: 100%;
    }

    @media(min-width: 700px) {
      footer div {
        max-width: 635px;
        width: 80%;
      }
    }
`}</style>


function Home() {
  return (
    <>  
    <Reveal opposite cascade bottom ssrFadeout duration={1000}>
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
        <Fade cascade duration={1000}><picture className="myself_img">
            <source srcSet="/images/myself1.png" media="(min-width: 700px)" />
            <img
              className="myself_img"
              src="/images/myself0.png"
              alt="bruno edoh"
            />
          </picture></Fade>
          
        </div>
        <div className="content">
        <Reveal bottom duration={5000}>
          <h2 className="is-medium">The Push</h2>
          
          <p>
          I got interested in tech back in 5<sup>th</sup>grade when
           I first used the internet. I was so fascinated by the internet that I decided I was 
           going to pursue a career in tech. Over a decade down the road now, I'm happy my little self
           made that decision. 
           </p>
           </Reveal> 
        </div>
      </div>
      
      <div className="credit">
        <a href="https://icons8.com">
          GitHub, LinkedIn, Twitter, Instagram, Stack Overflow, Verified Account
          icons by Icons8
        </a>
      </div>
      <Footer css={css} />
      </Reveal>
      {style}
    </>
  );
}

export default Home;
