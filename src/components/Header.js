import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const URLS = [
    {
      id: 1,
      url: '/',
      text: 'Books',
    },
    {
      id: 2,
      url: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <nav className="navbar">
      <h1>Bookstore CMS</h1>
      <div>
        <ul className="navmenu">
          {URLS.map((url) => (
            <li className="nav-item" key={url.id}>
              <NavLink to={url.url}>{url.text}</NavLink>
            </li>
          ))}

        </ul>
      </div>
      <i className="fa-light fa-user" />
    </nav>
  );
};

export default NavBar;
