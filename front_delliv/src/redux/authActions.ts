import { AuthAction, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './authActionTypes';

export const loginRequest = (): AuthAction => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (accessToken: string): AuthAction => ({
  type: LOGIN_SUCCESS,
  payload: {
    accessToken,
  },
});

export const loginFailure = (error: string): AuthAction => ({
  type: LOGIN_FAILURE,
  payload: {
    error,
  },
});
