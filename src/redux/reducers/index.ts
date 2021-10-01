import { combineReducers } from 'redux';
import tournaments from './tournaments';
import request from './request';

const rootReducer = combineReducers({
  tournaments,
  request
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
