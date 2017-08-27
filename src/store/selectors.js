import { createSelector } from 'reselect';
import { headings } from './globals';

const getContactById = ({ contacts }, { id }) => contacts[id];

export const makeContactDetailsSelector = () => createSelector(
  getContactById,
  contact => headings.map(h => contact[h])
);

export const getContactIds = createSelector(
  state => state.contacts,
  contacts => Object.keys(contacts)
);
