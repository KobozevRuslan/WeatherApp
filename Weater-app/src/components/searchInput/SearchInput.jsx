import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '../../store/thunk/action/app';
import { languegeObject } from '../../store/data/languageObject';

import { Input } from './styledComponents/SearchInput';

const SearchInput = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.app.lang);

  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      dispatch(fetchData(e.target.value));
    }
  };

  return (
    <Input
      type="text"
      placeholder={languegeObject[lang].placeholder}
      name="search_city"
      onKeyPress={onKeyPressHandler}
    />
  );
};

export default SearchInput;
