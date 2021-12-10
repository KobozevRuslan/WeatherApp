import React from 'react';

import CustomButton from '../customButton/CustomButton';

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
        <CustomButton />
      </div>
    </MainWeatherHeaderWrapper>
  );
};

export default Header;
