import { SAVE_CONTACT, DELETE_CONTACT } from '../actions/types';


export default (state = {}, action = {}, globalState) => {
  switch (action.type) {
    case SAVE_CONTACT:
      return { ...state, [action.payload.id]: globalState.editing[action.payload.id] };
    case DELETE_CONTACT:
    // state without contact with given id
      return Object.keys(state).reduce((acc, id) => {
        if (action.payload.id !== id) acc[id] = state[id];
        return acc;
      }, {});
    default:
      return state;
  }
};
