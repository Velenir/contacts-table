import React, { Component } from 'react';
import { connect } from 'react-redux';
import { headingsMapped } from '../../store/globals';
import { sortContacts } from '../../store/actions';
import arrowdown from '../../assets/arrowdown.svg';

class ContactsColumn extends Component {
  handleClick = () => {
    const { onClick, children, sortOrder: { dir = 'ASC' } } = this.props;
    onClick(children, dir === 'ASC' ? 'DESC' : 'ASC');
  }
  render() {
    const { children, onClick, sortable, sortOrder, ...props } = this.props;
    const { by, dir } = sortOrder;
    const arrowStyle = (children === by && dir === 'DESC') ? { transform: 'rotate(0.5turn)' } : undefined;

    return (
      <th {...props} onClick={sortable && this.handleClick} style={sortable && onClick && { cursor: 'pointer' }}>
        {sortable && <img className="sort-arrow" src={arrowdown} alt="" style={arrowStyle} />}
        {' '}
        {headingsMapped[children] || children}
      </th>
    );
  }
}

const mapStateToProps = ({ sortOrder }) => ({
  sortOrder
});

export default connect(mapStateToProps, { onClick: sortContacts })(ContactsColumn);
