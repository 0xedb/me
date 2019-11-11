import {useState} from 'react';
import NavItem from './NavItem';
import {Icon, InlineIcon} from '@iconify/react';
import crossedFingersMediumDarkSkinTone from '@iconify/icons-noto/crossed-fingers-medium-dark-skin-tone';
import backhandIndexPointingDownMediumDarkSkinTone from '@iconify/icons-noto/backhand-index-pointing-down-medium-dark-skin-tone';

function Navbar() {
  const [active, setActive] = useState(false);
  const burger = `navbar-burger ${active ? 'is-active' : ''}`;
  const menu = `navbar-menu ${active ? 'is-active' : ''}`;

  const handleBurgerClick = () => {
    setActive(!active);
  };

  return (
    <nav className="min uk-navbar-container uk-navbar uk-navbar-transparent">
      <div className="uk-navbar-right is-mobile">
        <a className="uk-navbar-toggle" uk-navbar-toggle-icon href="#">
          <Icon icon={backhandIndexPointingDownMediumDarkSkinTone} />
        </a>
      </div>
      <div className="uk-navbar-center is-desktop">
        <ul className="uk-breadcrumb">
          <NavItem
            name="home"
            icon={<Icon icon={crossedFingersMediumDarkSkinTone} />}
          />
          <NavItem name="about" />
          <NavItem name="work" />
          <NavItem name="fun" />
          <NavItem name="blog" />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

// <div className={menu}>
//         <div className="navbar-end">

//         </div>
//       </div>
