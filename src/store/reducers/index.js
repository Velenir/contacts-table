import combineReducers from 'combine-reducers-global-state';
import contacts from './contacts';
import editing from './editing';
import modal from './modal';

export default combineReducers({
  contacts,
  editing,
  modal
});
