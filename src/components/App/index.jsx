import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import ContactsTable from '../ContactsTable';
import { createContact } from '../../store/actions';
import Modal from '../Modal';
import ContactsForm from '../Modal/ContactsForm';

// need to wrap in a func to allow passing class components
const createModalForm = () => <ContactsForm />;


const App = ({ createContact }) => (
  <div className="app">
    <Modal>
      {createModalForm}
    </Modal>
    <h1 className="title">Gnosis Frontend - React/Redux Task</h1>
    <button onClick={createContact} className="btn">Create new Contact</button>
    <ContactsTable />
  </div>
);

export default connect(null, { createContact })(App);
