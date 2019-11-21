import React, { SyntheticEvent } from 'react';
import { notification } from 'antd';
import Reveal from 'react-reveal/Reveal';
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

const style = (
  <style jsx>{`
    .social {
      flex-flow: row wrap;
    }

    .social img {
      width: 40px;
      transition: all 0.5s ease 0.1s;
      padding: 7px 7px;
      padding-top: 18px;
      filter: grayscale(1);
    }

    .ant-popover-inner-content {
      padding: 4px;
    }

    .social img:hover {
      transform: scale(1.3);
      filter: unset;
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

const snapchat = (
  <Reveal cascade duration={3000}>
    <div>
      <img
        src="/images/snapchat.jpg"
        alt="snapchat"
        style={{ width: '300px' }}
      />
    </div>
  </Reveal>
);

function Social() {
  const handleSnapChat = (event: SyntheticEvent) => {
    event.preventDefault();
    notification.destroy();
    notification.open({
      message: '',
      description: snapchat,
      duration: 20,
    });
  };

  return (
    <div className="social centered">
      <a href="https://github.com/theBashShell" target="_blank">
        <img src="https://image.flaticon.com/icons/svg/733/733553.svg" />
      </a>
      <a href="https://www.linkedin.com/in/bruno-edoh/" target="_blank">
        <img src="https://image.flaticon.com/icons/svg/2111/2111499.svg" />
      </a>
      <a href="https://twitter.com/theBashShell" target="_blank">
        <img src="https://image.flaticon.com/icons/svg/733/733579.svg" />
      </a>
      <a
        href="https://stackoverflow.com/users/6790436/thebashshell"
        target="_blank"
      >
        <img src="https://image.flaticon.com/icons/svg/2111/2111628.svg" />
      </a>
      <a href="https://www.instagram.com/thebashshell/" target="_blank">
        <img src="https://image.flaticon.com/icons/svg/174/174855.svg" />
      </a>
      <a href="https://codesandbox.io/u/theBashShell" target="_blank">
        <img src="https://api.iconify.design/simple-icons:codesandbox.svg?color=teal" />
      </a>
      <a href="#" onClick={handleSnapChat}>
        <img src="https://image.flaticon.com/icons/svg/2111/2111616.svg" />
      </a>
      {style}
    </div>
  );
}

export default Social;
