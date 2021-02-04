import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <nav className='nav-bar'>
          <a className='brand' href='/'>
            <img className='brand-logo' src='logo512.png' alt='brand logo' />
            {/* <span className="brand-text">Pet Supplies</span> */}
          </a>
          <div className='' id='navbarCollapse'>
            <ul className='nav'>
              <li className='nav-item'>
                <a className='' href='/'>
                  Home <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='' href='/'>
                  Products
                </a>
              </li>
              <li className='nav-item'>
                <a className='' href='/'>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;