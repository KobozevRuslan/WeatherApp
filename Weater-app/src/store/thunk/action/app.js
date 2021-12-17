import {
  APP_FETCH_DATA_START,
  APP_FETCH_DATA_SUCCESS,
  APP_FETCH_DATA_ERROR,
  APP_TOGGLE_LANG,
  APP_TOGGLE_THEME,
  APP_TOGGLE_MODAL,
} from '../actionType';

import { HistoryService } from '../../../service/HistoryService';
import { ApiWeatherService } from '../../../service/ApiWeatherService';

const fetchDataStart = () => ({ type: APP_FETCH_DATA_START });
const fetchDataSuccess = (payload) => {
  return {
    type: APP_FETCH_DATA_SUCCESS,
    payload,
  };
};
const fetchDataError = () => ({ type: APP_FETCH_DATA_ERROR });

export const toggleLang = (payload) => ({ type: APP_TOGGLE_LANG, payload });
export const toggleTheme = () => ({ type: APP_TOGGLE_THEME });
export const toggleModal = () => ({ type: APP_TOGGLE_MODAL });

export const fetchData = (city, isInit = false) => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataStart());
      const data = await ApiWeatherService.fetchData(city);
      dispatch(fetchDataSuccess(data, isInit));
      if (!isInit) {
        HistoryService.updateHistory(data);
      }
    } catch (e) {
      dispatch(fetchDataError(e.data));
    }
  };
};
