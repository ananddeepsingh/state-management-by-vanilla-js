export default function reducer(state, action) {
  if (action.type === 'INCREMENT') {
    return state + 1;
  } 

  if (action.type === 'DECREMENT') {
    if (state > 0) {
      return state - 1;
    }else{
      return state = 0;
    }
  }

  return state
}