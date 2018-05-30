import { FETCH_GIF } from '../actions';

export default function(state={}, action) {
  console.log('from reducer', action)

  switch(action.type) {
    case FETCH_GIF:
      // return [...state, ...action.payload.data.data]
      return [...action.payload.data.data]

    default:
      return state;
  }
}