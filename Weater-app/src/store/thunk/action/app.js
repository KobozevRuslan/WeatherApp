import {
  APP_FETCH_DATA_START,
  APP_FETCH_DATA_SUCCESS,
  APP_FETCH_DATA_ERROR,
  APP_TOGGLE_LANG,
  APP_TOGGLE_THEME,
  APP_TOGGLE_MODAL,
  APP_ADD_HISTORY,
  APP_SORT,
} from '../actionType';

import ApiWeather from '../../../service/Api';

const fetchDataStart = () => ({ type: APP_FETCH_DATA_START });
const fetchDataSuccess = (payload) => ({
  type: APP_FETCH_DATA_SUCCESS,
  payload,
});
const fetchDataError = () => ({ type: APP_FETCH_DATA_ERROR });

export const toggleLang = (payload) => ({ type: APP_TOGGLE_LANG, payload });
export const toggleTheme = () => ({ type: APP_TOGGLE_THEME });
export const togglehModal = () => ({ type: APP_TOGGLE_MODAL });
export const addHistory = (payload) => ({ type: APP_ADD_HISTORY, payload });
export const sortHandler = (payload) => ({ type: APP_SORT, payload });

export const fetchData = (city) => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataStart());
      const data = await ApiWeather.fetchData(city);
      dispatch(fetchDataSuccess(data));
      dispatch(addHistory({ city: city, weather: Math.floor(data.main.temp) }));
    } catch (e) {
      dispatch(fetchDataError(e));
    }
  };
};
