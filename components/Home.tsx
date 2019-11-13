const style = (
  <style jsx>{`
    #home {
      position: relative;
      background: wheat;
      height: calc(100vh - 56px);
    }

    @media(min-width: 700px) {
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
      background: indianred;
    }
  `}</style>
);

function Home() {
  return (
    <>
      <div id="home">
        <div className="intro centered">hello</div>
      </div>
      {style}
    </>
  );
}

export default Home;
