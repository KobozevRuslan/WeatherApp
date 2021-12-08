import React from 'react';
import { useSelector } from 'react-redux';

import { languegeObject } from '../../../store/data/languageObject';

import { MainDailyWeatherWrapper } from './styledComponents/DailyWeather';

const DailyWeather = () => {
  const state = useSelector((state) => state.app);
  const { weather, isLoading, lang, isBlackTheme } = state;

  return (
    <MainDailyWeatherWrapper blackTheme={isBlackTheme}>
      {isLoading ? (
        <h2>{languegeObject[lang].mainePageWeather.loading}</h2>
      ) : (
        <div className="dailyWeatherWrapper">
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
        </div>
      )}
    </MainDailyWeatherWrapper>
  );
};

export default DailyWeather;
