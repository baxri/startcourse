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
    {
      home: '3000, Notrh St, Columbus OH, 43219',
      from: 'USA',
      to: '200, North St, Columbus, OH 43215',
      dest: 'USA',
      status: 'Planed',
      dates: '08/16/2019-09/14/2019',
      color: '#f5e51b',
    },
    {
      home: '3000, Notrh St, Columbus OH, 43219',
      from: 'USA',
      to: '200, North St, Columbus, OH 43215',
      dest: 'USA',
      status: 'Planed',
      dates: '08/16/2019-09/14/2019',
      color: '#2ecc71',
    },
    {
      home: '3000, Notrh St, Columbus OH, 43219',
      from: 'USA',
      to: '200, North St, Columbus, OH 43215',
      dest: 'USA',
      status: 'Planed',
      dates: '08/16/2019-09/14/2019',
      color: '#f5ab35',
    }
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