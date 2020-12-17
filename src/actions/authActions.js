import axios from 'axios'

const proxy = 'http://localhost:4000/'

export const logOut = () => (dispatch) => {
  localStorage.removeItem('token')
  dispatch({ type: 'LOG_OUT', payload: false })
}
export const registration = async (email, password) => {
  await axios.post(proxy + 'auth/registration', { email, password })
}
export const authentication = (email, password) => async (dispatch) => {
  const isAuth = await axios.post(proxy + 'auth/authentication', { email, password })
  if (isAuth.status < 300) {
    localStorage.setItem('token', isAuth.data.token)
    dispatch({ type: 'CHECK_AUTH', payload: true })
  }
}
export const checkAuth = () => async (dispatch) => {
  if (localStorage.getItem('token')) {
    const favorites = await axios.get(proxy + 'user/favorite', {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    dispatch({ type: 'FETCH_FAVORITE', payload: favorites.data })
    dispatch({ type: 'IS_AUTH', payload: true })
  } else {
    dispatch({ type: 'IS_AUTH', payload: false })
  }
}
