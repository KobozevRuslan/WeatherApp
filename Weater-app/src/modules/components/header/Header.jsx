import React from 'react';

import weatherIcon from '../../../assets/image/weatherIcon.png';

import CustomButton from './customButton/CustomButton';
import SearchInput from './searchInput/SearchInput';

import { HeaderWrapper } from './styledComponents/Header';

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="weatherHeaderItems">
        <img src={weatherIcon} alt="weatherIcon" />
        <h1>Weather App</h1>
      </div>
      <div className="weatherItems">
        <SearchInput />
        <CustomButton />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
