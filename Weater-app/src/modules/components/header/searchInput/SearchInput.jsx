import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { fetchWeatherAction } from '../../../../redux/slices/weatherSlices';

import { Input } from './styledComponents/SearchInput';

const SearchInput = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      dispatch(fetchWeatherAction(e.target.value));
    }
  };

  return (
    <Input
      type="text"
      placeholder={t('placeholder')}
      name="search_city"
      onKeyPress={onKeyPressHandler}
    />
  );
};

export default SearchInput;
