import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';

import { fetchData } from '../../store/thunk/action/app';
import { languegeObject } from '../../store/data/languageObject';
import { PathWeather } from '../routePath';

import FilteredCitiesItems from './filteredCitiesItems/FilteredCitiesItems';

import { SearchWrapper } from './styledComponents/SearchInput';
import { blackTheme, lightTheme } from '../styledComponents/App';

const SearchInput = () => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.app);
  const { lang, isBlackTheme } = state;

  const itemOnClickHandler = (e) => {
    setValue(e.target.textContent);
    setIsOpen(!isOpen);
  };

  const inputOnChangeHandler = (e) => {
    setValue(e.target.value);
    setIsOpen(true);
  };

  const inputOnClickHandler = () => {
    setIsOpen(true);
  };

  const linkOnClickHandler = () => {
    dispatch(fetchData(value));
  };

  return (
    <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
      <SearchWrapper>
        <input
          className="searchInput"
          value={value}
          placeholder={languegeObject[lang].placeholder}
          onChange={inputOnChangeHandler}
          onClick={inputOnClickHandler}
        />
        <Link onClick={linkOnClickHandler} to={PathWeather}>
          {languegeObject[lang].link.search}
        </Link>
        <FilteredCitiesItems
          value={value}
          isOpen={isOpen}
          itemOnClickHandler={itemOnClickHandler}
        />
      </SearchWrapper>
    </ThemeProvider>
  );
};

export default SearchInput;
