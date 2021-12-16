import React from 'react';
import { useSelector } from 'react-redux';

import { languegeObject } from '../../../store/data/languageObject';

const CardError = () => {
  const lang = useSelector((state) => state.app.lang);
  return (
    <div>
      <h2>{languegeObject[lang].mainePageWeather.error}</h2>
    </div>
  );
};

export default CardError;
