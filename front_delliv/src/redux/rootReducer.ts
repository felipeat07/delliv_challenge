import { combineReducers } from 'redux';
import authSlice from './authSlice';
import pedidoSlice from './pedidoSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  pedidos: pedidoSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
