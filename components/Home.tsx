function Home() {
  return (
    <div className="home">
      <p className="me-info uk-heading-medium uk-text-center">Hi, I'm Bruno</p>
      <div className="me-img min centered">
        <picture>
          <source srcSet="/images/bruno0.png" media="(min-width: 700px)" />
          <img
            id="me"
            src="/images/bruno.png"
            alt="bruno pic"
            className="uk-img"
          />
        </picture>
      </div>
    </div>
  );
}

export default Home;
