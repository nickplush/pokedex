import axios from 'axios'
import NotificationManager from 'react-notifications/lib/NotificationManager'

export const logOut = () => (dispatch) => {
  dispatch({ type: 'LOG_OUT', payload: false })
};
export const registration = async (email,password) =>  {
  await axios.post('http://localhost:4000/registration',{email,password})
}
export const authentication =  (email,password) =>async (dispatch)=> {
  console.log('LOOOG', 'aaaaaa')
  const isAuth = await axios.post('http://localhost:4000/authentication',{email,password})
  if (isAuth.status<300){
    alert(isAuth.data)
    dispatch({type: 'CHECK_AUTH', payload: true})
  }
}
