import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { fetchWeatherAction } from '../../../../redux/slices/weatherSlices';

import {
  MainDailyWeatherWrapper,
  DailyWeatherWrapper,
} from './styledComponents/DailyWeather';

const DailyWeather = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherAction('Kyiv'));
  }, [dispatch]);

  const state = useSelector((state) => state);
  const { weather, isLoading, error } = state;

  return (
    <MainDailyWeatherWrapper>
      {isLoading ? (
        <h2>{t('mainePageWeather.loading')}</h2>
      ) : error ? (
        <h3>{error?.message}</h3>
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
              <h3>{t('mainePageWeather.today')}</h3>
            </div>
          </div>
          <div className="dailyWeatherItem">
            <p>{t('mainePageWeather.city')}:</p>
            <span>{weather?.name}</span>
            <sup>{weather?.sys.country}</sup>
          </div>
        </DailyWeatherWrapper>
      )}
    </MainDailyWeatherWrapper>
  );
};

export default DailyWeather;
