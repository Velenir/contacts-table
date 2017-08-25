import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CREATE_CONTACT, EDIT_CONTACT } from '../../store/actions/types';
import { saveContact, cancelEditSave, editContactProp } from '../../store/actions';
import { headings, headingsMapped as mapped, headingsTypesMapped as types } from '../../store/globals';
import './ContactsForm.scss';

// TODO: move parseDate to globals and curry per spearator
const parseDate = date => {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return `${y}-${m >= 10 ? '' : 0}${m}-${d >= 10 ? '' : 0}${d}`;
};

class ContactsForm extends Component {
  submit = (e) => {
    e.preventDefault();
    const { saveContact, id } = this.props;
    saveContact(id);
  }

  cancel = () => {
    const { cancelEditSave, id } = this.props;
    cancelEditSave(id);
  }

  editProp = ({ target }) => {
    const { editContactProp, id } = this.props;
    editContactProp(id, target.name, target.value);
  }

  render() {
    const { details, submitText } = this.props;
    return (
      <form onSubmit={this.submit} className="contacts-form">
        {/* TODO: put input into a separate component*/}
        {headings.map((h) => (
          <input
            className="contacts-form__input"
            type={types[h]}
            name={h}
            key={h}
            placeholder={mapped[h]}
            value={details[h] instanceof Date ? parseDate(details[h]) : (details[h] || '')}
            onChange={this.editProp}
          />
        ))}
        <div className="contacts-form__controls">
          <button type="submit" className="btn">{submitText}</button>
          <button type="button" className="btn" onClick={this.cancel}>Cancel</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ editing, modal: { role, id } }) => ({
  details: editing[id],
  submitText: role === CREATE_CONTACT ? 'Create' : EDIT_CONTACT ? 'Save' : 'Submit',
  id
});

export default connect(mapStateToProps, {
  saveContact, cancelEditSave, editContactProp
})(ContactsForm);
