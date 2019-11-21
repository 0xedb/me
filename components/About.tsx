import Footer from './Footer';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';
import MeSummary from './MeSummary';

config({ ssrFadeout: true });

const style = (
  <style>{`
#about {
    font-family: 'Quicksand', sans-serif;
}

    .intro-description, .my-pic {
        width: 100%; 
    }

    .city_text {
        color: white;
    }

    .sec_div {
        background: #000000;
        width: 100%; 
        max-height: 430px;
    } 

    .intro-description img {
        filter: grayscale(1);
    height: 430px;
    width: 100%;
    object-fit: cover;
    }

    .city {
        padding-top: 40px;
    }
 

    

    .locate {
        position: absolute;
        left: 59%;
        top: 70%;
        padding-top: 30px;
        background: gold; 
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 7px;   z-index: 1;
   
    }
    
    .locate-outer {
        background: transparent;
        border: 1px solid gold; 
        animation: scale-up 1.5s ease-out infinite !important;
    }

    

    @media(min-width: 700px) {
        .intro-description {
            max-width: 950px;
            flex-flow: row nowrap;
        }

        .intro-description div {
            width: 100%;
        }

        .sec_div {
            height: 450px;
            max-height: unset;
        }

        .intro-description img {
            height: 450px; 
        }

        .city {
            padding-top: 60px;
        }


        .locate {
            left: 74%;
            top: 95%;
            width: 24px;
            height: 24px;
        }

        .locate-outer {
            border-width: 2px ;
        }
    }
`}</style>
);

const css = (
  <style>{`
    footer div {
        max-width: 100%;
        width: 100%;
    }

    @media(min-width: 700px) {
        footer div {
            max-width: 950px; 
            width: 100%;
        }
    }
`}</style>
);

function About() {
  return (
    <Reveal opposite cascade right ssrFadeout duration={1000}>
      <div id="about" className="centered min">
        <h1>Hi, I'm Bruno</h1>
        <div className="intro-description centered">
          <div className="my-pic">
            <Fade left cascade duration={1000}>
              <picture>
                <source
                  srcSet="/images/myself3.jpg"
                  media="(min-width: 700px)"
                />
                <img src="/images/myself3_0.jpg" alt="bruno" />
              </picture>
            </Fade>
          </div>
          <div className="sec_div">
            <Reveal duration={1000}>
              <MeSummary />
            </Reveal>
          </div>
        </div>

        <section className="intro-description centered city">
          <div className="sec_div city_text centered"> 
            <h2>Accra</h2>
            <p>I live in Ghana. I was born in the capital, 
            Accra. I've lived virtually my entire life in Accra</p>
          </div>
          <div>
            <Fade left duration={1000}>
              <img className="city-img" src="/images/accra.png" alt="accra" />
            </Fade>
          </div>
          <section className="locate" />
          <section className="locate locate-outer" />
        </section>
        <section>Education</section>
      </div>
      <Footer css={css} />
      {style}
    </Reveal>
  );
}

export default About;
