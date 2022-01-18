import {
  APP_FETCH_DATA_START,
  APP_FETCH_DATA_SUCCESS,
  APP_TOGGLE_LANG,
  APP_TOGGLE_THEME,
  APP_TOGGLE_MODAL,
  APP_FETCH_DATA_ERROR,
} from '../actionType';

export const initialState = {
  mainWeatherObj: {
    main: {
      temp: '',
      country: '',
    },
    weather: [
      {
        0: {
          description: '',
        },
      },
    ],
    wind: {
      speed: '',
    },
    sys: {
      country: '',
    },
  },
  lang: 'eng',
  isLoading: true,
  isBlackTheme: false,
  isHistoryModalShow: false,
  isError: false,
};

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case APP_FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case APP_FETCH_DATA_SUCCESS:
      return {
        ...state,
        mainWeatherObj: payload,
        isLoading: false,
        isError: false,
      };
    case APP_FETCH_DATA_ERROR:
      return {
        ...state,
        mainWeatherObj: payload,
        isLoading: false,
        isError: true,
      };
    case APP_TOGGLE_LANG:
      return {
        ...state,
        lang: payload,
      };
    case APP_TOGGLE_THEME:
      return {
        ...state,
        isBlackTheme: !state.isBlackTheme,
      };
    case APP_TOGGLE_MODAL:
      return {
        ...state,
        isHistoryModalShow: !state.isHistoryModalShow,
      };
    default:
      return state;
  }
};
