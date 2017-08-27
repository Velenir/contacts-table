import React, { PureComponent } from 'react';
import { headingsMapped as mapped, headingsTypesMapped as types } from '../../store/globals';

class ContactsInput extends PureComponent {
  render() {
    const { name, value = '', ...props } = this.props;

    return (
      <input
        className="contacts-form__input"
        type={types[name]}
        name={name}
        placeholder={mapped[name]}
        value={value}
        {...props}
      />
    );
  }
}

export default ContactsInput;
