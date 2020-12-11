export default function (state = false, action) {
  switch (action.type) {
    case 'CHECK_AUTH':
      return  action.payload;
    case 'LOG_OUT':
      return  action.payload;
    default:
      return state
  }
}
