import combineReducers from 'combine-reducers-global-state';
import contacts from './contacts';
import editing from './editing';
import modal from './modal';
import sortOrder from './sortOrder';

export default combineReducers({
  contacts,
  editing,
  modal,
  sortOrder
});
