import React, { Component } from 'react';
import { connect } from 'react-redux';
import { headings } from '../../store/globals';
import { editContact, deleteContact } from '../../store/actions';

const parseDate = date => {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return `${y}/${m >= 10 ? '' : 0}${m}/${d >= 10 ? '' : 0}${d}`;
};

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

const mapStateToProps = ({ contacts }, { id }) => ({
  details: headings.map(h => contacts[id][h])
});


export default connect(mapStateToProps, { editContact, deleteContact })(ContactsRow);
