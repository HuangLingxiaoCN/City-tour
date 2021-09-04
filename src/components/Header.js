import './Navigation.css';

const Header = (props) => {
  return(
    <header className="main-header">
      <div>
        <a href="../../public/index.html" className="main-header-anchor">City Travel</a>
      </div>
      <nav className="main-nav">
        <ul className="main-nav-items">
          <li className="main-nav-item"><a href="../../public/index.html">Home</a></li>
          <li className="main-nav-item"><a href="../../public/index.html">About</a></li>
          <li className="main-nav-item"><a href="../../public/index.html">Tours</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;