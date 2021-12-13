import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cities from 'cities.json';
import { ThemeProvider } from 'styled-components';

import { fetchData } from '../../store/thunk/action/app';
import { languegeObject } from '../../store/data/languageObject';

import {
  blackTheme,
  lightTheme,
  SearchWrapper,
} from './styledComponents/SearchInput';

const SearchInput = () => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.app);
  const { lang, isBlackTheme } = state;

  const filteredCities = cities
    .filter((cities) => {
      return cities.name.toLowerCase().includes(value.toLowerCase());
    })
    .splice(0, 10);

  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      dispatch(fetchData(e.target.value));
    }
    setIsOpen(!isOpen);
  };

  const itemOnClickHandler = (e) => {
    setValue(e.target.textContent);
    dispatch(fetchData(e.target.textContent));
    setIsOpen(!isOpen);
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    setIsOpen(true);
  };

  const inputOnClickHandler = () => {
    setIsOpen(true);
  };

  return (
    <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
      <SearchWrapper>
        <input
          className="searchInput"
          value={value}
          placeholder={languegeObject[lang].placeholder}
          onKeyPress={onKeyPressHandler}
          onChange={onChangeHandler}
          onClick={inputOnClickHandler}
        />
        <ul className="autocomplete">
          {value && isOpen
            ? filteredCities.map((city, index) => {
                return (
                  <li
                    className="autocompelete_item"
                    key={index}
                    onClick={itemOnClickHandler}
                  >
                    {city.name}
                  </li>
                );
              })
            : null}
        </ul>
      </SearchWrapper>
    </ThemeProvider>
  );
};

export default SearchInput;
