import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
      classname: 'homePage',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
      classname: 'calcPage',
    },
    {
      id: 2,
      path: '/quotes',
      text: 'Quotes',
      classname: 'quotePage',
    },
  ];

  return (
    <div className="nav">
      <nav className="navBar">
        <h1 className="title">
          MathMagicians
        </h1>
        <ul className="otherPages">
          {links.map((link) => (
            <li className={link.classname} key={link.id}>
              <NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
