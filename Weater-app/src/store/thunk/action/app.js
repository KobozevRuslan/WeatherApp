import {
  APP_FETCH_DATA_START,
  APP_FETCH_DATA_SUCCESS,
  APP_FETCH_DATA_ERROR,
  APP_CHANGE_LANG,
  APP_CHANGE_THEME,
  APP_CHANGE_MODAL,
} from '../actionType';

import ApiWeather from '../../../service/Api';

const fetchDataStart = () => ({ type: APP_FETCH_DATA_START });
const fetchDataSuccess = (payload) => ({
  type: APP_FETCH_DATA_SUCCESS,
  payload,
});
const fetchDataError = () => ({ type: APP_FETCH_DATA_ERROR });

export const changeLang = (payload) => ({ type: APP_CHANGE_LANG, payload });

export const changeTheme = () => ({ type: APP_CHANGE_THEME });

export const changeModal = () => ({ type: APP_CHANGE_MODAL });

export const fetchData = (city) => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataStart());
      const data = await ApiWeather.fetchData(city);
      dispatch(fetchDataSuccess(data));
    } catch (e) {
      dispatch(fetchDataError(e));
    }
  };
};
