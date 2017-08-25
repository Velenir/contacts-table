import React from 'react';
import { connect } from 'react-redux';
import ContactsRow from './ContactsRow';

const ContactsBody = ({ contactIds }) => (
  <tbody>
    {contactIds.map(id => <ContactsRow key={id} id={id} />)}
  </tbody>
);

const mapStateToProps = ({ contacts }) => ({
  contactIds: Object.keys(contacts)
});

export default connect(mapStateToProps, null)(ContactsBody);
