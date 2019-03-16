import { combineReducers } from 'redux';

import routes from './routes';
import auth from './auth';
import equipment from './equipment';
import trips from './trips';
// ... other reducers

export default combineReducers({
  routes,
  auth,
  equipment,
  trips,
  // ... other reducers
});