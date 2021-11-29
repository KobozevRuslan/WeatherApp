import React from 'react';
import { useSelector } from 'react-redux';

import { languegeObject } from '../../../store/data/languageObject';

import tempIcon from '../../../assets/image/tempIcon.jpg';
import humidityIcon from '../../../assets/image/humidityIcon.png';
import precipitationIcon from '../../../assets/image/precipitationIcon.png';
import windIcon from '../../../assets/image/windIcon.png';
import cloud from '../../../assets/image/cloud.png';

import { MainDetailsDailyWeatherWrapper } from './styledComponents/DetailsDailyWeather';

const DetailsDailyWeather = () => {
  const state = useSelector((state) => state.app);
  const { weather, isLoading, lang } = state;

  return (
    <MainDetailsDailyWeatherWrapper>
      {isLoading ? (
        <h2>{languegeObject[lang].mainePageWeather.loading}</h2>
      ) : (
        <div>
          <div className="detailsDailyItems">
            <div className="imageCircle">
              <img src={tempIcon} alt="tempIcon" />
            </div>
            <p>{languegeObject[lang].mainePageWeather.temperature}: </p>
            <span>
              {Math.floor(weather.main.temp && weather?.main.temp)}
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
        </div>
      )}
    </MainDetailsDailyWeatherWrapper>
  );
};

export default DetailsDailyWeather;
