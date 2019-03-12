import * as actionTypes from '../actions/types';

const initialState = {
  token: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case actionTypes.SET_ACCESS_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    // ...other actions

    default:
      return state;
  }
}