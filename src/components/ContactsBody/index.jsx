import React from 'react';
import { connect } from 'react-redux';
import ContactsRow from './ContactsRow';
import { getSortedContactIds } from '../../store/selectors';

const ContactsBody = ({ contactIds }) => (
  <tbody>
    {contactIds.map(id => <ContactsRow key={id} id={id} />)}
  </tbody>
);

const mapStateToProps = (state) => ({
  contactIds: getSortedContactIds(state)
});

export default connect(mapStateToProps, null)(ContactsBody);
