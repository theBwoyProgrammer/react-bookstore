import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1 className="header-head">Book Store CMS</h1>
    <nav className="navbar">
      <li key={1} className="li">
        <NavLink to="/">Books</NavLink>
      </li>
      <li key={2} className="li">
        <NavLink to="/Categories">Categories</NavLink>
      </li>
    </nav>
  </header>
);

export default Header;
