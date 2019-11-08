import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link href="/">theBashShell</Link>
        </div>
      </div>
      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <div className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item">About</a>
          <a className="navbar-item">Work</a>
          <a className="navbar-item">Contact</a>
          <a className="navbar-item">What's Up</a>
          <a className="navbar-item">Blog</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
