import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { PathMain } from '../routePath';

import { languegeObject } from '../../store/data/languageObject';

import DailyWeatherCard from './dailyWeatherCard/DailyWeatherCard';
import DetailsDailyWeatherCard from './detailsDailyWeatherCard/DetailsDailyWeatherCard';

import { MainCardWrapper, LinkWrapper } from './styledComponents/MainCard';
import { blackTheme, lightTheme } from '../styledComponents/App';

const MainCard = () => {
  const state = useSelector((state) => state.app);
  const { isBlackTheme, lang } = state;

  return (
    <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
      <MainCardWrapper>
        <DailyWeatherCard />
        <DetailsDailyWeatherCard />
      </MainCardWrapper>
      <LinkWrapper>
        <Link to={PathMain}>{languegeObject[lang].link.back}</Link>
      </LinkWrapper>
    </ThemeProvider>
  );
};

export default MainCard;
