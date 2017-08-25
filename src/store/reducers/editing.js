import { CREATE_CONTACT, SAVE_CONTACT, EDIT_CONTACT, EDIT_CONTACT_PROP, CANCEL_EDIT_SAVE } from '../actions/types';


export default (state = {}, action = {}, globalState) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return { ...state, [action.payload.id]: { id: action.payload.id } };
    case EDIT_CONTACT:
      return { ...state, [action.payload.id]: globalState.contacts[action.payload.id] };
    case EDIT_CONTACT_PROP:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          [action.payload.name]: action.payload.value
        }
      };
    case CANCEL_EDIT_SAVE:
    case SAVE_CONTACT:
      return { ...state, [action.payload.id]: undefined };
    default:
      return state;
  }
};
