import * as actionTypes from '../actions/types';

const schema = {
  id: 'int64',
  username: 'string',
  firstname: 'string',
  lastname: 'string',
  email: 'string',
  model: 'string',
  password: 'string',
  role: 'string',
  equipments: 'array',
  trips: 'array',
  searchTasks: 'array',
};

const initialState = {
  schema: schema,
  expires_in: null,
  role: null,
  token: null,
  user: null,
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