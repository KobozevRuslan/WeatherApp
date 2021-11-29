import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cities from 'cities.json';

import { fetchData } from '../../store/thunk/action/app';
import { languegeObject } from '../../store/data/languageObject';

import { SearchWrapper } from './styledComponents/SearchInput';

const SearchInput = () => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.app);

  const { lang } = state;

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

  const itemClickHandler = (e) => {
    dispatch(fetchData(e.target.textContent));
    setValue(e.target.textContent);
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    setIsOpen(true);
  };

  const inputClickHandler = () => {
    setIsOpen(true);
  };

  return (
    <SearchWrapper>
      <input
        className="searchInput"
        value={value}
        placeholder={languegeObject[lang].placeholder}
        onKeyPress={onKeyPressHandler}
        onChange={onChangeHandler}
        onClick={inputClickHandler}
      />
      <ul className="autocomplete">
        {value && isOpen
          ? filteredCities.map((citie) => {
              return (
                <li
                  className="autocompelete_item"
                  key={citie.name}
                  onClick={itemClickHandler}
                >
                  {citie.name}
                </li>
              );
            })
          : null}
      </ul>
    </SearchWrapper>
  );
};

export default SearchInput;
