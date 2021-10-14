import "./Navigation.css";

const Header = (props) => {

  return (
    <header className="main-header">
      <div id="navbtn">
        <i className="fas fa-bars"></i>
      </div>
      <div id="logo">
        <a href="./" className="main-header-anchor">
          City Travel
        </a>
      </div>
      <nav className="main-nav">
        <ul className="main-nav-items">
          <li className="main-nav-item">
            <a href="./">Home</a>
          </li>
          <li className="main-nav-item">
            <a href="./">About</a>
          </li>
          <li className="main-nav-item">
            <a href="./">Tours</a>
          </li>
        </ul>
      </nav>
      <nav className='mobile-nav'>
        <ul className="mobile-nav-items">
          <li className="mobile-nav-item">
            <a href="./">Home</a>
          </li>
          <li className="mobile-nav-item">
            <a href="./">About</a>
          </li>
          <li className="mobile-nav-item">
            <a href="./">Tours</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
