import React from 'react';
import { connect } from 'react-redux';
import { headings } from '../../store/globals';
import ContactsColumn from './ContactsColumn';
import { sortContacts } from '../../store/actions';

const ContactsHead = ({ sortContacts }) => (
  <thead>
    <tr>
      {headings.map(heading => (
        <ContactsColumn
          sortable
          key={heading}
          onClick={sortContacts}
        >
          {heading}
        </ContactsColumn>
      ))}
      <ContactsColumn>Actions</ContactsColumn>
    </tr>
  </thead>
);

export default connect(null, { sortContacts })(ContactsHead);
