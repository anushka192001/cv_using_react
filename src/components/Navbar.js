import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           

            <li className='nav-item adjust-margin'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                ABOUT
              </Link>
            </li>

            <li className='nav-item adjust-others-margin'>
              <Link
                to='/education'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                EDUCATION
              </Link>
            </li>

            <li className='nav-item adjust-others-margin'>
              <Link
                to='/skills'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SKILLS
              </Link>
            </li>
            <li className='nav-item adjust-others-margin'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                PROJECTS
              </Link>
            </li>
            <li className='nav-item adjust-others-margin'>
              <Link
                to='/experience'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                EXPERIENCE
              </Link>
            </li>
            <li className='nav-item adjust-others-margin'>
              <Link
                to='/contacts'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
