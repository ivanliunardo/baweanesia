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
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Baweanesia
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Beranda
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/wisata'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Wisata
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/produk'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Produk
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Masuk
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--primary'><a  href='https://intense-peak-53882.herokuapp.com/admin/auth/login' className='btns'>Masuk</a></Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
