import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { languegeObject } from '../../../store/data/languageObject';

import LoadingWrapper from '../../loadingWrapper/LoadingWrapper';

import tempIcon from '../../../assets/image/tempIcon.png';
import humidityIcon from '../../../assets/image/humidityIcon.png';
import precipitationIcon from '../../../assets/image/precipitationIcon.png';
import windIcon from '../../../assets/image/windIcon.png';
import cloud from '../../../assets/image/cloud.png';

import { DetailsCardWrapper } from './styledComponents/DetailsDailyWeatherCard';
import { blackTheme, lightTheme } from '../../styledComponents/App';

const DetailsDailyWeatherCard = () => {
  const state = useSelector((state) => state.app);
  const { isBlackTheme, mainWeatherObj, lang } = state;

  return (
    <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
      <DetailsCardWrapper>
        <LoadingWrapper>
          <div className="detailsDailyItems">
            <div className="imageCircle">
              <img src={tempIcon} alt="tempIcon" />
            </div>
            <p>{languegeObject[lang].mainePageWeather.temperature}: </p>
            <span>
              {Math.floor(mainWeatherObj?.main.temp)}
              <sup>&deg;</sup> {languegeObject[lang].mainePageWeather.feel}{' '}
              {Math.floor(mainWeatherObj?.main.feels_like)}
              <sup>&deg;</sup>
            </span>
          </div>
          <div className="detailsDailyItems">
            <div className="imageCircle">
              <img src={precipitationIcon} alt="precipitationIcon" />
            </div>
            <p>{languegeObject[lang].mainePageWeather.precipitation}: </p>
            <span>{mainWeatherObj?.weather[0].description}</span>
          </div>
          <div className="detailsDailyItems">
            <div className="imageCircle">
              <img src={humidityIcon} alt="humidityIcon" />
            </div>
            <p>{languegeObject[lang].mainePageWeather.pressire}: </p>
            <span>{mainWeatherObj?.main.pressure}</span>
          </div>
          <div className="detailsDailyItems">
            <div className="imageCircle">
              <img src={windIcon} alt="windIcon" />
            </div>
            <p>{languegeObject[lang].mainePageWeather.wind}: </p>
            <span> {mainWeatherObj?.wind.speed}</span>
          </div>
          <img className="cloud_image" src={cloud} alt="cloud" />
        </LoadingWrapper>
      </DetailsCardWrapper>
    </ThemeProvider>
  );
};

export default DetailsDailyWeatherCard;
