import React from 'react';
import cities from 'cities.json';

const FilteredCitiesItems = ({ value, isOpen, itemOnClickHandler }) => {
  const filteredCities = cities
    .filter((cities) => {
      return cities.name.toLowerCase().includes(value.toLowerCase());
    })
    .splice(0, 10);

  return (
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
  );
};

export default FilteredCitiesItems;
