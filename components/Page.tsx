import Navbar from './Navbar'; 
import NavTab from './NavTab';
import Footer from './Footer';


const style = (
  <style>{`
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
 
  @media (min-width: 700px) {
    .social {
      position: fixed;
      left: 22px;
      flex-flow: column nowrap;
      top: 30%;
    }

    .social img {
      padding-top: 5px;
    }
  }
`}</style>
);

export const Social = () =>  <div className="social centered">
<a href="https://github.com/theBashShell" target="_blank">
  <img src="https://img.icons8.com/material-rounded/32/000000/github.png" />
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

function Page() { 

  return (
    <>
      <Navbar />
      <NavTab /> 
      <Social />
      <Footer />
      {style}
    </>
  );
}

export default Page;
