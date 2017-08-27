import React, { Component } from 'react';
import { headingsMapped } from '../../store/globals';
import arrowdown from '../../assets/arrowdown.svg';

class ContactsColumn extends Component {
  handleClick = () => {
    const { onClick, children } = this.props;
    onClick && onClick(children);
  }
  render() {
    const { children, onClick, sortable, ...props } = this.props;
    return (
      <th {...props} onClick={this.handleClick} style={onClick && { cursor: 'pointer' }}>
        {sortable && <img className="sort-arrow" src={arrowdown} alt="" />}{' '}
        {headingsMapped[children] || children}
      </th>
    );
  }
}

export default ContactsColumn;
