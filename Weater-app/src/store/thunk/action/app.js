import {
  APP_FETCH_DATA_START,
  APP_FETCH_DATA_SUCCESS,
  APP_FETCH_DATA_ERROR,
  APP_TOGGLE_LANG,
  APP_TOGGLE_THEME,
  APP_TOGGLE_MODAL,
  APP_ADD_TO_HISTORY,
  APP_SORT,
} from '../actionType';

import { HistoryService } from '../../../service/HistoryService';
import { ApiWeatherService } from '../../../service/ApiWeatherService';

const fetchDataStart = () => ({ type: APP_FETCH_DATA_START });
const fetchDataSuccess = (payload, isInit) => {
  if (!isInit) HistoryService.updateHistory(payload);
  return {
    type: APP_FETCH_DATA_SUCCESS,
    payload,
  };
};
const fetchDataError = () => ({ type: APP_FETCH_DATA_ERROR });

export const toggleLang = (payload) => ({ type: APP_TOGGLE_LANG, payload });
export const toggleTheme = () => ({ type: APP_TOGGLE_THEME });
export const toggleModal = () => ({ type: APP_TOGGLE_MODAL });
export const sortHandler = (payload) => ({ type: APP_SORT, payload });
export const addToHistory = (data) => {
  const weather = { city: data.name, weather: Math.floor(data.main.temp) };
  return { type: APP_ADD_TO_HISTORY, payload: weather };
};

export const fetchData = (city, isInit = false) => {
  return async (dispatch) => {
    try {
      HistoryService.initHistory();
      dispatch(fetchDataStart());
      const data = await ApiWeatherService.fetchData(city);
      dispatch(fetchDataSuccess(data, isInit));
      dispatch(addToHistory(data));
    } catch (e) {
      dispatch(fetchDataError(e.data));
    }
  };
};
