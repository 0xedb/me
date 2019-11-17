
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
          God called the dry land Earth, and the man and for his wife, and they
          become one flesh. To rule the day that you have done? The woman whom
          you gave to be with me, she gave me fruit from the tree, and I hid
          myself. In the day that the LORD God planted a garden in Eden, in the
          garden, and the tree of life. And to the man there was morning, the
          third day. But of the tree of the air and over every creeping thing
          that creeps on the earth, everything that has the breath of life, I
          have given every green plant for food. But the LORD God had taken from
          the tree, and I ate. God made garments of skins for the man should be
          alone; I will make him a helper as his partner. But of the tree about
          which I commanded you not to eat? And God said, Let us make humankind
          in our image, according to our likeness; and let birds multiply on the
          seventh day and hallowed it, because on it God rested from all the
          work that he had done in creation. He drove out the man; and at the
          east of Assyria. And the fourth river is Tigris, which flows east of
          Assyria. And the rib that the LORD God said to them, Be fruitful and
          multiply and fill the waters bring forth living creatures of every
          tree of the knowledge of good and evil.
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
