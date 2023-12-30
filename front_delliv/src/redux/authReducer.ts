import { AuthAction, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './authActionTypes';

interface AuthState {
  loading: boolean;
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  loading: false,
  token: null,
  error: null,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.accessToken,
        error: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        token: null,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default authReducer;
