import React from 'react';
import { useSelector } from 'react-redux';

import tempIcon from '../../../../assets/image/tempIcon.jpg';
import humidityIcon from '../../../../assets/image/humidityIcon.png';
import precipitationIcon from '../../../../assets/image/precipitationIcon.png';
import windIcon from '../../../../assets/image/windIcon.png';
import cloud from '../../../../assets/image/cloud.png';

import { MainDetailsDailyWeatherWrapper } from './styledComponents/DetailsDailyWeather';
import { useTranslation } from 'react-i18next';

const DetailsDailyWeather = () => {
  const { t } = useTranslation();

  const state = useSelector((state) => state);
  const { weather, isLoading, error } = state;

  return (
    <MainDetailsDailyWeatherWrapper>
      {isLoading ? (
        <h2>{t('mainePageWeather.loading')}</h2>
      ) : error ? (
        <h3>{error?.message}</h3>
      ) : (
        <div>
          <div className="detailsDailyItems">
            <div className="imageCircle">
              <img src={tempIcon} alt="tempIcon" />
            </div>
            <p>{t('mainePageWeather.temperature')}: </p>
            <span>
              {Math.floor(weather?.main.temp)}
              <sup>&deg;</sup> {t('mainePageWeather.feel')} {Math.floor(weather?.main.feels_like)}
              <sup>&deg;</sup>
            </span>
          </div>
          <div className="detailsDailyItems">
            <div className="imageCircle">
              <img src={precipitationIcon} alt="precipitationIcon" />
            </div>
            <p>{t('mainePageWeather.precipitation')}: </p>
            <span>{weather?.weather[0].description}</span>
          </div>
          <div className="detailsDailyItems">
            <div className="imageCircle">
              <img src={humidityIcon} alt="humidityIcon" />
            </div>
            <p>{t('mainePageWeather.pressire')}: </p>
            <span>{weather?.main.pressure}</span>
          </div>
          <div className="detailsDailyItems">
            <div className="imageCircle">
              <img src={windIcon} alt="windIcon" />
            </div>
            <p>{t('mainePageWeather.wind')}: </p>
            <span> {weather?.wind.speed}</span>
          </div>
          <img className="cloud_image" src={cloud} alt="cloud" />
        </div>
      )}
    </MainDetailsDailyWeatherWrapper>
  );
};

export default DetailsDailyWeather;
