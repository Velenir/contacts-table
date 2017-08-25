import uuid from 'uuid/v4';

// generate random ids
const IDS = Array.from({ length: 5 }, () => uuid());

const initialContacts = {
  // these can be uuids or ids from a DB
  [IDS[1]]: {
    id: IDS[1],
    firstname: 'John',
    lastname: 'Doe',
    dob: new Date('1970/01/01'),
    tel: '123123123',
    email: 'example@example.org'
  },
  [IDS[2]]: {
    id: IDS[2],
    firstname: 'Jane',
    lastname: 'Doe',
    dob: new Date('1970/01/01'),
    tel: '123123123',
    email: 'example@example.org'
  },
  [IDS[3]]: {
    id: IDS[3],
    firstname: 'Test',
    lastname: 'Account',
    dob: new Date('1970/01/01'),
    tel: '123123123',
    email: 'example@example.org'
  },
  [IDS[4]]: {
    id: IDS[4],
    firstname: 'Young',
    lastname: 'User',
    dob: new Date('1998/04/02'),
    tel: '123123123',
    email: 'test@example.org'
  },
  [IDS[5]]: {
    id: IDS[5],
    firstname: 'John',
    lastname: 'Doe',
    dob: new Date('1970/01/01'),
    tel: '123123123',
    email: 'account@example.org'
  }
};

export const initialState = {
  contacts: initialContacts
};

export const headings = ['firstname', 'lastname', 'dob', 'tel', 'email'];
export const headingsMapped = {
  firstname: 'Firstname',
  lastname: 'Lastname',
  dob: 'Date of Birth',
  tel: 'Phonenumber',
  email: 'E-Mail'
};
export const headingsTypesMapped = {
  firstname: 'text',
  lastname: 'text',
  dob: 'date',
  tel: 'tel',
  email: 'email'
};
