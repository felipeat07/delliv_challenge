import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // ...outros redutores se você tiver
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
