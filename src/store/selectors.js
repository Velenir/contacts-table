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

export const getContactsArray = createSelector(
  state => state.contacts,
  contacts => Object.keys(contacts).map(key => contacts[key])
);

export const getSortedContacts = createSelector(
  getContactsArray,
  state => state.sortOrder,
  (contacts, { by, dir = 'ASC' }) => {
    if (!by) return contacts;
    const sortedContacts = contacts.slice().sort((a, b) => {
      if (a[by] > b[by]) return dir === 'ASC' ? 1 : -1;
      if (a[by] < b[by]) return dir === 'ASC' ? -1 : 1;
      return 0;
    });

    return sortedContacts;
  }
);

export const getSortedContactIds = createSelector(
  getSortedContacts,
  contacts => contacts.map(c => c.id)
);
