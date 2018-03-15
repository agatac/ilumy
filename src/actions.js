import { ADD_EVENT } from './constants';

export function addEvent(event) {
  return {
    type: ADD_EVENT,
    event,
  };
}

export function createEvent(event) { // eslint-disable-line
  return (dispatch) => {
    dispatch(addEvent(event));
  };
}
