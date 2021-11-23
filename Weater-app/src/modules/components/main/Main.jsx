import React from 'react';

import DailyWeather from './dailyWeather/DailyWeather';
import DetailsDailyWeather from './detailsDailyWeather/DetailsDailyWeather';

import { MainWrapper } from './styledComponents/Main';

const Main = () => {
  return (
    <MainWrapper>
      <DailyWeather />
      <DetailsDailyWeather />
    </MainWrapper>
  );
};

export default Main;