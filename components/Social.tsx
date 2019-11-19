import React from 'react'

const style = <style jsx>{`
.social {
    flex-flow: row wrap;
  }

  .social img {
    width: 40px;  
    transition: all 0.5s ease 0.1s;
    padding: 7px 7px;
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

function Social() {
    return (
        <>
        <div className="social centered">
<a href="https://github.com/theBashShell" target="_blank">
  <img src="https://api.iconify.design/logos:github-icon.svg" />
</a>
<a href="https://www.linkedin.com/in/bruno-edoh/" target="_blank">
  <img src="https://api.iconify.design/ps:linkedin.svg" />
</a>
<a href="https://twitter.com/theBashShell" target="_blank">
  <img src="https://api.iconify.design/dashicons:twitter.svg" />
</a>
<a
  href="https://stackoverflow.com/users/6790436/thebashshell"
  target="_blank"
>
  <img src="https://api.iconify.design/simple-icons:stackoverflow.svg" />
</a>
<a href="https://www.instagram.com/thebashshell/" target="_blank">
  <img src="https://api.iconify.design/ion:logo-instagram.svg" />
</a>
<a href='https://codesandbox.io/u/theBashShell' target="_blank">
<img src='https://api.iconify.design/logos-codesandbox.svg' />
</a>
</div>
{style}
        </>
    )
}

export default Social
