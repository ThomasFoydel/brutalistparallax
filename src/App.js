import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from 'components/navbar/NavBar';
import ParallaxPage from 'components/parallaxpage/ParallaxPage';
import PortfolioLink from 'components/portfoliolink/PortfolioLink';

import Store from 'context/Store';

import './App.scss';

function App() {
  return (
    <Store>
      <div className='App'>
        <NavBar />
        <ParallaxPage />
        <PortfolioLink />
      </div>
    </Store>
  );
}

export default App;
