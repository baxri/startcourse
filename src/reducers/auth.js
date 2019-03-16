import * as actionTypes from '../actions/types';

const initialState = {
  token: null,
  user: {
    id: null,
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: '', //Visitor, Carrier, Admin
    equipments: [],
    trips: [],
    searchTasks: []
  },
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case actionTypes.SET_ACCESS_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case actionTypes.SET_USER:
      return {

        ...state,
        user: action.payload,
      };

    // ...other actions
    default:
      return state;
  }
}