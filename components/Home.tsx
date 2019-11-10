function Home() {
  return (
    <div className="home page_section">
      home here
      <div className="me-img centered">
        <picture>
          <source srcSet="/images/bruno0.png" media="(min-width: 700px)" />
          <img src="/images/bruno.png" alt="bruno pic" className="uk-img" />
        </picture>
      </div>
    </div>
  );
}

export default Home;
