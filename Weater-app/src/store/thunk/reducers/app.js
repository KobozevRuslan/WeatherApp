import {
  APP_CHANGE_LANG,
  APP_CHANGE_THEME,
  APP_FETCH_DATA_START,
  APP_FETCH_DATA_SUCCESS,
  APP_CHANGE_MODAL,
} from '../actionType';

export const initialState = {
  weather: {
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
  theme: false,
  modal: false,
};

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case APP_FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
      };
    case APP_FETCH_DATA_SUCCESS:
      return {
        ...state,
        weather: payload,
        isLoading: false,
      };
    case APP_CHANGE_LANG:
      return {
        ...state,
        lang: payload,
      };
    case APP_CHANGE_THEME:
      return {
        ...state,
        theme: !state.theme,
      };
    case APP_CHANGE_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };
    default:
      return state;
  }
};
