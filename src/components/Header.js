import React from 'react';
import { NavLink } from 'react-router-dom';
import person from './Assests/person.png';

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
      text: 'Categories',
    },
  ];
  return (
    <nav className="navbar">
      <h1 className="h1">Bookstore CMS</h1>
      <div className="nav-container">
        <ul className="menu">
          {URLS.map((url) => (
            <>
              <li className="nav-item" key={url.id}>
                <NavLink to={url.url}>{url.text}</NavLink>
              </li>
            </>
          ))}
          <li className="contact">
            <img src={person} alt="" height={35} width={70} className="pic" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
