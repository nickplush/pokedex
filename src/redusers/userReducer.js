export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload]
    case 'REMOVE_FAVORITE':
      return action.payload
    case 'FETCH_FAVORITE':
      return action.payload
    default:
      return state
  }
}
