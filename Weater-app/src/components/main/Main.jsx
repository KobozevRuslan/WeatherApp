import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { PathMain } from '../routePath';

import { languegeObject } from '../../store/data/languageObject';

import DailyWeather from './dailyWeather/DailyWeather';
import DetailsDailyWeather from './detailsDailyWeather/DetailsDailyWeather';

import {
  blackTheme,
  lightTheme,
  MainCardWrapper,
  LinkWrapper,
} from './styledComponents/Main';

const Main = () => {
  const state = useSelector((state) => state.app);
  const { isBlackTheme, lang } = state;

  return (
    <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
      <MainCardWrapper>
        <DailyWeather />
        <DetailsDailyWeather />
      </MainCardWrapper>
      <LinkWrapper>
        <Link to={PathMain}>{languegeObject[lang].link.back}</Link>
      </LinkWrapper>
    </ThemeProvider>
  );
};

export default Main;
