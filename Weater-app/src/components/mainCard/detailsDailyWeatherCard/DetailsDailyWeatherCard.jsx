import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { languegeObject } from '../../../store/data/languageObject';

import CheckWrapper from '../../checkWrapper/CheckWrapper';

import tempIcon from '../../../assets/image/tempIcon.png';
import humidityIcon from '../../../assets/image/humidityIcon.png';
import precipitationIcon from '../../../assets/image/precipitationIcon.png';
import windIcon from '../../../assets/image/windIcon.png';
import cloud from '../../../assets/image/cloud.png';

import { DetailsCardWrapper } from './styledComponents/DetailsDailyWeatherCard';
import { blackTheme, lightTheme } from '../../styledComponents/App';

const DetailsDailyWeatherCard = () => {
  const state = useSelector((state) => state.app);
  const { isBlackTheme, weather, lang } = state;

  return (
    <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
      <DetailsCardWrapper>
        <CheckWrapper>
          <div className="detailsDailyItems">
            <div className="imageCircle">
              <img src={tempIcon} alt="tempIcon" />
            </div>
            <p>{languegeObject[lang].mainePageWeather.temperature}: </p>
            <span>
              {Math.floor(weather?.main.temp)}
              <sup>&deg;</sup> {languegeObject[lang].mainePageWeather.feel}{' '}
              {Math.floor(weather?.main.feels_like)}
              <sup>&deg;</sup>
            </span>
          </div>
          <div className="detailsDailyItems">
            <div className="imageCircle">
              <img src={precipitationIcon} alt="precipitationIcon" />
            </div>
            <p>{languegeObject[lang].mainePageWeather.precipitation}: </p>
            <span>{weather?.weather[0].description}</span>
          </div>
          <div className="detailsDailyItems">
            <div className="imageCircle">
              <img src={humidityIcon} alt="humidityIcon" />
            </div>
            <p>{languegeObject[lang].mainePageWeather.pressire}: </p>
            <span>{weather?.main.pressure}</span>
          </div>
          <div className="detailsDailyItems">
            <div className="imageCircle">
              <img src={windIcon} alt="windIcon" />
            </div>
            <p>{languegeObject[lang].mainePageWeather.wind}: </p>
            <span> {weather?.wind.speed}</span>
          </div>
          <img className="cloud_image" src={cloud} alt="cloud" />
        </CheckWrapper>
      </DetailsCardWrapper>
    </ThemeProvider>
  );
};

export default DetailsDailyWeatherCard;
