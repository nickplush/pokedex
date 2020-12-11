import axios from 'axios'

export const logOut = () => (dispatch) => {
  dispatch({ type: 'LOG_OUT', payload: false })
}
export const registration = async (email, password) => {
  const user = await axios.post('http://localhost:4000/registration', { email, password })
  if (user.status < 300) {
    await authentication(email, password)
  }
}
export const authentication = (email, password) => async (dispatch) => {
  const isAuth = await axios.post('http://localhost:4000/authentication', { email, password })
  if (isAuth.status < 300) {
    alert(isAuth.data)
    dispatch({ type: 'CHECK_AUTH', payload: true })
  }
}
