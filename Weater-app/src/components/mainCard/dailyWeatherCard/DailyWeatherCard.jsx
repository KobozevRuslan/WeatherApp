import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { languegeObject } from '../../../store/data/languageObject';

import LoadingWrapper from '../../loadingWrapper/LoadingWrapper';

import { CardWrapper } from './styledComponents/DailyWeatherCard';
import { blackTheme, lightTheme } from '../../styledComponents/App';

const DailyWeatherCard = () => {
  const state = useSelector((state) => state.app);
  const { isBlackTheme, weather, lang } = state;

  return (
    <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
      <CardWrapper>
        <LoadingWrapper>
          <div className="dailyWeatherItems">
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
        </LoadingWrapper>
      </CardWrapper>
    </ThemeProvider>
  );
};

export default DailyWeatherCard;
