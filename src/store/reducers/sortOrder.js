import { SORT_CONTACTS } from '../actions/types';


export default (state = {}, action = {}) => {
  switch (action.type) {
    case SORT_CONTACTS:
      return { by: action.payload.by, dir: action.payload.dir };
    default:
      return state;
  }
};
