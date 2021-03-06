import {
  CHANGE_LANGUAGE,
  GET_BRAND_SETTINGS,
  GET_CURRENCY_LIST,
  GET_USER_SETTINGS,
} from './settingsActions';
import immutable from 'seamless-immutable';

const initialState = immutable({
  brand: {
    currency: '',
    language: '',
    track_unique_clicks: null,
  },
  // this is user specific interface language,
  // which we probably will need to save to the db when they change at some point
  currencyList: {},
  errorLoadingCurrencyList: false,
  language: {
    label: 'English',
    type: 'en',
  },
  loading: null,
  loadingCurrencyList: false,
  user: {
    timezone: null,
  },
});

export function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return state.merge({
        'atest': 'test',
        language: action.language
      });

    case GET_BRAND_SETTINGS.begin:
      return state.merge({
        loading: true,
      });

    case GET_BRAND_SETTINGS.success:
      return state.merge({
        brand: action.data,
        loading: false,
      });

    case GET_BRAND_SETTINGS.error:
      return state.merge({
        loading: false,
      });

    case GET_CURRENCY_LIST.begin:
      return state.merge({
        errorLoadingCurrencyList: false,
        loadingCurrencyList: true,
      });

    case GET_CURRENCY_LIST.success:
      return state.merge({
        currencyList: action.data,
        errorLoadingCurrencyList: false,
        loadingCurrencyList: false,
      });

    case GET_CURRENCY_LIST.error:
      return state.merge({
        errorLoadingCurrencyList: true,
        loadingCurrencyList: false,
      });

    case GET_USER_SETTINGS.begin:
      return state.merge({
        loading: true,
      });

    case GET_USER_SETTINGS.success:
      return state.merge({
        user: action.data,
      });

    case GET_USER_SETTINGS.error:
      return state.merge({
        loading: false,
      });

    default:
      return state;
  }
}
