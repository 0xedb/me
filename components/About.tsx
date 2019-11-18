
const style = <style>{`
#about {
    font-family: 'Quicksand', sans-serif;
}

    .intro-description {
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
    }
`}</style>


function About() {
    return (
        <>
        
        <div id='about' className='centered min'><h1>I'm Bruno</h1>
        <div className="intro-description centered">
        <div><picture>
        <source srcSet='/images/myself3.jpg' media="(min-width: 700px)" />
        <img src='/images/myself3_0.jpg' alt='bruno' />
        </picture></div>
        <div><p>hello world</p></div>
        </div>

        <section className='intro-description centered city'>
        <div>one</div>
        <div><img className="city-img" src='/images/accra.png' alt='accra' /></div>
        </section>
            
        </div>
        {style}
        </>
    )
}

export default About
