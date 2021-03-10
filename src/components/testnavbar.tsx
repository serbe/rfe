import React, { Dispatch, SetStateAction, useState } from 'react';
import './navbar.css';

export const TestNavBar = (): JSX.Element => {
  const [menu, setMenu] = useState(false);

  const aLabel = menu ? 'menu' : 'close menu';
  const navWrapper = menu ? 'nav__wrapper active' : 'nav__wrapper';

  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <div className="site-header__start px-2">
          <a href="/" className="brand">
            Brand
          </a>
        </div>
        <div className="site-header__middle">
          <nav className="nav">
            <button
              className="nav__toggle"
              aria-expanded={menu}
              type="button"
              aria-label={aLabel}
              onClick={() => setMenu(!menu)}
            >
              menu
            </button>
            <ul className={navWrapper}>
              <li className="nav__item">
                <a href="#">Home</a>
              </li>
              <li className="nav__item">
                <a href="#">About</a>
              </li>
              <li className="nav__item">
                <a href="#">Services</a>
              </li>
              <li className="nav__item">
                <a href="#">Hire us</a>
              </li>
              <li className="nav__item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="site-header__end px-2">
          <a href="#">Sign in</a>
        </div>
      </div>
    </header>
  );
};
