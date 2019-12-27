import React, { useState, useContext } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { CTX } from 'context/Store';

import './NavBar.scss';

const NavBar = () => {
  const [sidebarOpen, setSidebaropen] = useState(false);

  const [appState, updateState] = useContext(CTX);

  const handleMenuOpenClick = () => setSidebaropen(!sidebarOpen);

  const sidebarAnimationProps = useSpring({
    position: 'absolute',
    opacity: sidebarOpen ? 1 : 0,
    left: sidebarOpen ? 0 : -500,
    config: config.wobbly
  });

  const changePage = page => {
    console.log('hmmm');
    updateState({ type: 'CHANGE_PAGE', payload: { page } });
  };

  const mobileChangePage = page => {
    updateState({ type: 'CHANGE_PAGE', payload: { page } });
    setSidebaropen(false);
  };

  return (
    <div>
      <div className='navbar-fixed'>
        <div className='navbar'>
          <div className='nav-wrapper'>
            <div className='brand-logo' onClick={() => changePage(0)}>
              BrutalistParallax
            </div>
            <div data-target='mobile-demo' className='sidenav-trigger'>
              <i
                className='fa fa-bars navbar-opensidebar hide-on-large'
                onClick={handleMenuOpenClick}
              />
            </div>
            <ul className='navbar-large hide-on-med-and-down'>
              <li onClick={() => changePage(1)}>Order Now</li>

              <li onClick={() => changePage(2)}>Locations</li>

              <li onClick={() => changePage(3)}>About</li>

              <li onClick={() => changePage(4)}>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <animated.div
        style={sidebarAnimationProps}
        className='sidebarmenu hide-on-large'
        // id='mobile-demo '
      >
        <div onClick={() => mobileChangePage(1)}>Order Now</div>
        <hr className='sidebarmenu-linebreak' />
        <div onClick={() => mobileChangePage(2)}>Locations</div>
        <hr className='sidebarmenu-linebreak' />
        <div onClick={() => mobileChangePage(3)}>About</div>
        <hr className='sidebarmenu-linebreak' />
        <div onClick={() => mobileChangePage(4)}>Contact</div>
        <hr className='sidebarmenu-linebreak' />
      </animated.div>
    </div>
  );
};

export default NavBar;
