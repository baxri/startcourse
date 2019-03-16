import * as actionTypes from '../actions/types';

const schema = {
  id: 'int64',
  userId: 'int64',
  driveRestSequenceHash: 'string',
  startDate: 'date-time',
  endDate: 'date-time',
  completionState: 'string', // Planned, Canceled, Completed
  bids: 'array',
};

const initialState = {
  schema: schema,
  token: null,
  trips: {
    // Caching with 
  },
  trips: [

  ],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case actionTypes.SET_TRIPS:
      return {
        ...state,
        trips: action.payload,
      };
    // ...other actions
    default:
      return state;
  }
}