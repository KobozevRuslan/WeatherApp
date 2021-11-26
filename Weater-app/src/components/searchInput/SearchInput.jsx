import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Hint } from 'react-autocomplete-hint';

import { fetchData } from '../../store/thunk/action/app';
import { languegeObject } from '../../store/data/languageObject';

import { SearchWrapper } from './styledComponents/SearchInput';

const SearchInput = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.app);

  const { weather, lang } = state;

  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      dispatch(fetchData(e.target.value));
    }
  };

  return (
    <SearchWrapper>
      <Hint options={[weather.name]}>
        <input
          className="searchInput"
          placeholder={languegeObject[lang].placeholder}
          onKeyPress={onKeyPressHandler}
        />
      </Hint>
    </SearchWrapper>
  );
};

export default SearchInput;
