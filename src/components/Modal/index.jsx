import React from 'react';
import { connect } from 'react-redux';
import './Modal.scss';

const Modal = ({ children, open }) => {
  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" />
      <div className="modal__contents">
        {typeof children === 'function' ? children() : children}
      </div>
    </div>
  );
};

const mapStateToProps = ({ modal }) => ({
  ...modal
});

export default connect(mapStateToProps)(Modal);
