import React from 'react';

import weatherIcon from '../../assets/image/weatherIcon.png';

import CustomButton from '../customButton/CustomButton';
import SearchInput from '../searchInput/SearchInput';

import { MainWeatherHeaderWrapper } from './styledComponents/Header';

const Header = () => {
  return (
    <MainWeatherHeaderWrapper>
      <div className="weatherHeaderItems">
        <div className="weatherHeaderItems">
          <img src={weatherIcon} alt="weatherIcon" />
          <h1>Weather App</h1>
        </div>
      </div>
      <div className="weatherItems">
        <SearchInput />
        <CustomButton />
      </div>
    </MainWeatherHeaderWrapper>
  );
};

export default Header;
