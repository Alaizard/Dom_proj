import AsyncStorage from '@react-native-community/async-storage'
import * as APIUtil from '../util/api.js'

// App Imports
// import { routeApi } from '../../../setup/routes'
// import { MESSAGE_SHOW } from '../../common/api/actions'

// Actions Types
export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_RESPONSE = 'REGISTER_RESPONSE'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE'
export const SET_USER = 'SET_USER'
export const LOGOUT = 'LOGOUT'

// Actions

// Register a user
export const registerRequest = () => ({
  type: REGISTER_REQUEST
})

export const registerResponse = (payload) => ({
  type: REGISTER_RESPONSE,
  payload
})
// Login a user
export const loginRequest = () => ({
  type: LOGIN_REQUEST
})

export const loginResponse = (payload) => ({
  type: LOGIN_RESPONSE,
  payload
})

// export const login = payload => ({
//   type: LOGIN_REQUEST,
//   payload
// })

// logout
export const logout = () => ({
  type: LOGOUT
})

// Dispatch

export const register = payload => async dispatch => {
  dispatch(registerRequest())
  try {
    await APIUtil.registerResponse({
      payload
    })

    await dispatch(login(payload))
  } catch (error) {
      throw (error);
    }
  }


export const login = payload => async dispatch => {
  dispatch(loginRequest())

  try {
    await APIUtil.login(payload)

    await dispatch(loginResponse(payload))
    await setUserLocally(token, user)
  } catch (error) {
      throw(error)
  }
}

export const logout = () => async (dispatch) => {
  dispatch(logout())
  try {
    await APIUtil.signOut()
    await unsetUserLocally()
  } catch (error) {
    throw(error)
  }
}






// Set user token and info locally (AsyncStorage)
export function setUserLocally(token, user) {
  // Set token
  AsyncStorage.setItem('token', token)
  AsyncStorage.setItem('user', JSON.stringify(user))
}

// Unset user token and info locally (AsyncStorage)
export function unsetUserLocally() {
  // Remove token
  AsyncStorage.removeItem('token')
  AsyncStorage.removeItem('user')
}