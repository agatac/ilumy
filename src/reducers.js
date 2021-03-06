import { ADD_EVENT } from './constants';

const INITIAL_STATE = {
  events: [],
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return Object.assign({}, state, {
        events: [...state.events, action.event],
      });
    default:
      return state;
  }
};

export default rootReducer;
