import React, { Component } from 'react';
import { headingsMapped } from '../../store/globals';

class ContactsColumn extends Component {
  handleClick = () => {
    const { onClick, children } = this.props;
    onClick && onClick(children);
  }
  render() {
    const { children, onCLick, ...props } = this.props;
    return (
      <th {...props} onClick={this.handleClick}>
        {headingsMapped[children] || children}
      </th>
    );
  }
}

export default ContactsColumn;
