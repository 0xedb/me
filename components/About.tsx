import Footer from './Footer'; 

const style = <style>{`
#about {
    font-family: 'Quicksand', sans-serif;
}

    .intro-description, .my-pic {
        width: 100%; 
    }

    .intro-description img {
        filter: grayscale(1);
    height: 437px;
    width: 100%;
    object-fit: cover;
    }

    .city {
        padding-top: 40px;
    }

    .city-img {
        height: 330px !important;
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
        animation: scale-up 1.5s ease-out infinite;
    }

    @keyframes scale-up {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(3);
            opacity: 0;
        }
    }

    @media(min-width: 700px) {
        .intro-description {
            max-width: 950px;
            flex-flow: row nowrap;
        }

        .intro-description div {
            width: 100%;
        }

        .intro-description img {
            height: 637px;
        }

        .city {
            padding-top: 80px;
        }


        .locate {
            left: 74%;
            top: 78%;
            width: 24px;
            height: 24px;
        }

        .locate-outer {
            border-width: 2px ;
        }
    }
`}</style>

const css = <style>{`
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

function About() {
    return (
        <> 
        <div id='about' className='centered min'><h1>I'm Bruno</h1>
        <div className="intro-description centered">
        <div className='my-pic'><picture>
        <source srcSet='/images/myself3.jpg' media="(min-width: 700px)" />
        <img src='/images/myself3_0.jpg' alt='bruno' />
        </picture></div>
        <div><p>hello world</p></div>
        </div>
<div className='locate'></div>
<div className='locate locate-outer'></div>
        <section className='intro-description centered city'>
        <div>one</div>
        
        <div><img className="city-img" src='/images/accra.png' alt='accra' /></div>
        </section>
        <section>Education</section>            
        </div> 
        <Footer css={css} />
        {style}
        </>
    )
}

export default About
