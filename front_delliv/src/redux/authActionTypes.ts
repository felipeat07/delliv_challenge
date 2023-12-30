export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    accessToken: string;
  };
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: {
    error: string;
  };
}

export type AuthAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction;
