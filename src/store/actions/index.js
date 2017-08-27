import uuid from 'uuid/v4';
import * as TYPES from './types';

export const createContact = () => ({
  type: TYPES.CREATE_CONTACT,
  payload: { id: uuid() }
});
export const saveContact = (id) => ({
  type: TYPES.SAVE_CONTACT,
  payload: { id }
});
export const editContact = (id) => ({
  type: TYPES.EDIT_CONTACT,
  payload: { id }
});
export const editContactProp = (id, name, value) => ({
  type: TYPES.EDIT_CONTACT_PROP,
  payload: { id, name, value }
});
export const deleteContact = (id) => ({
  type: TYPES.DELETE_CONTACT,
  payload: { id }
});
export const cancelEditSave = (id) => ({
  type: TYPES.CANCEL_EDIT_SAVE,
  payload: { id }
});
export const sortContacts = (by, dir) => ({
  type: TYPES.SORT_CONTACTS,
  payload: { by, dir }
});
