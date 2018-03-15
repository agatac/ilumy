import ADD_EVENT from './actions'

export function addEvent(event) {
  return {
    type: ADD_EVENT,
    event
  }
}

function createEvent(event) {
  return dispatch => {
    dispatch(addEvent(event))
  }
}
