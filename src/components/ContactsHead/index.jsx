import React from 'react';
import { headings } from '../../store/globals';
import ContactsColumn from './ContactsColumn';

const ContactsHead = () => (
  <thead>
    <tr>
      {headings.map(heading => (
        <ContactsColumn
          sortable
          key={heading}
        >
          {heading}
        </ContactsColumn>
      ))}
      <ContactsColumn>Actions</ContactsColumn>
    </tr>
  </thead>
);

export default ContactsHead;
