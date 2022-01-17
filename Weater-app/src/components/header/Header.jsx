import React from 'react';

import Navigation from '../navigation/Navigation';

import weatherIcon from '../../assets/image/weatherIcon.png';

import { MainWeatherHeaderWrapper } from './styledComponents/Header';

const Header = () => {
  return (
    <MainWeatherHeaderWrapper>
      <div className="weatherHeaderItems">
        <div className="weatherHeaderItems">
          <img src={weatherIcon} alt="weatherIcon" />
          <h1>Weather App</h1>
        </div>
        <Navigation />
      </div>
    </MainWeatherHeaderWrapper>
  );
};

export default Header;
