import { REGISTER_REQUEST, REGISTER_USER, SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions'

// Initial State
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null
}

// State
export default (state = userInitialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
        return {
            ...state,
            isLoading: true
        }

    case REGISTER_RESPONSE:
        return {
            ...state,
            isLoading: false,
            isAuthenticated: action.isAuthenticated,
            details: action.user
        }

    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user
      }

    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: action.isLoading
      }

    case LOGIN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    case LOGOUT:
      return userInitialState;

    default:
      return state;
  }
}
