import {useState} from 'react';
import NavItem from './NavItem';

function Navbar() {
  const [active, setActive] = useState(false);
  const burger = `navbar-burger ${active ? 'is-active' : ''}`;
  const menu = `navbar-menu ${active ? 'is-active' : ''}`;

  const handleBurgerClick = () => {
    setActive(!active);
  };

  return (
    <nav className="min uk-navbar-container uk-navbar">
      <div className="uk-navbar-left">
        <a className="uk-navbar-toggle uk-navbar-toggle-icon"  href="#"></a>
      </div>
      <div className="uk-navbar-center">
        <ul className="uk-breadcrumb">
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
