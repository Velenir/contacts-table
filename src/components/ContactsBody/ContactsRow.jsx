import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editContact, deleteContact } from '../../store/actions';
import { makeContactDetailsSelector } from '../../store/selectors';
import { dateParser } from '../../helpers';

const parseDate = dateParser('/');

class ContactsRow extends Component {
  editContact = (e) => {
    e.preventDefault();
    const { id, editContact } = this.props;
    editContact(id);
  }

  deleteContact = (e) => {
    e.preventDefault();
    const { id, deleteContact } = this.props;
    deleteContact(id);
  }

  render() {
    const { details } = this.props;

    return (
      <tr>
        {details.map((data, i) => <td key={i}>{data instanceof Date ? parseDate(data) : data}</td>)}
        <td>
          <a href="#" alt="Edit" onClick={this.editContact}>Edit</a>{' '}
          <a href="#" alt="Delete" onClick={this.deleteContact}>Delete</a>
        </td>
      </tr>
    );
  }
}

// creates individual selector for each component
const makeMapStateToProps = () => {
  const getContactDetails = makeContactDetailsSelector();
  return (state, props) => ({
    details: getContactDetails(state, props)
  });
};


export default connect(makeMapStateToProps, { editContact, deleteContact })(ContactsRow);
