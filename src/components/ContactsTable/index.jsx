import React from 'react';
import ContactsHead from '../ContactsHead';
import ContactsBody from '../ContactsBody';

import './ContactsTable.scss';

const ContactsTable = () => (
  <table className="contacts-table">
    <ContactsHead />
    <ContactsBody />
  </table>
);

export default ContactsTable;
