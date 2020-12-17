export const changeSelector = (type) => (dispatch) => {
  console.log('LOOOG', type)
  dispatch({ type: 'CHANGE_SELECTOR', payload: type })
}
