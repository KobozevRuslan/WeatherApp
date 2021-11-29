import React from 'react';
import { useSelector } from 'react-redux';

import { languegeObject } from '../../../store/data/languageObject';

import {
  MainDailyWeatherWrapper,
  DailyWeatherWrapper,
} from './styledComponents/DailyWeather';

const DailyWeather = () => {
  const state = useSelector((state) => state.app);
  const { weather, isLoading, lang } = state;

  return (
    <MainDailyWeatherWrapper>
      {isLoading ? (
        <h2>{languegeObject[lang].mainePageWeather.loading}</h2>
      ) : (
        <DailyWeatherWrapper>
          <div>
            <div className="dailyWeatherCardInfo">
              <h1>
                {Math.floor(weather?.main.temp)}
                <sup>&deg;</sup>
              </h1>
              <img
                src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                alt={weather?.weather[0].description}
              />
            </div>
            <div className="dailyWeatherCardInfo">
              <h3>{languegeObject[lang].mainePageWeather.today}</h3>
            </div>
          </div>
          <div className="dailyWeatherItem">
            <p>{languegeObject[lang].mainePageWeather.city}:</p>
            <span>{weather?.name}</span>
            <sup>{weather?.sys.country}</sup>
          </div>
        </DailyWeatherWrapper>
      )}
    </MainDailyWeatherWrapper>
  );
};

export default DailyWeather;
