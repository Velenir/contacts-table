import { CREATE_CONTACT, SAVE_CONTACT, EDIT_CONTACT, CANCEL_EDIT_SAVE } from '../actions/types';

const initialState = { open: false, role: null, id: null };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_CONTACT:
    case EDIT_CONTACT:
      return { open: true, role: action.type, id: action.payload.id };
    case CANCEL_EDIT_SAVE:
    case SAVE_CONTACT:
      return initialState;
    default:
      return state;
  }
};
