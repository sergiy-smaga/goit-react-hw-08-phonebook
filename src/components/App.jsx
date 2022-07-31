import { Component } from 'react';
import styled from 'styled-components';

import { nanoid } from 'nanoid';
import { ContactForm } from './Form';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleFormData = data => {
    const alreadyAdded = this.state.contacts.some(
      obj => obj.name === data.name
    );

    alreadyAdded
      ? alert(`Contact ${data.name} has already added`)
      : this.setState({
          contacts: [
            ...this.state.contacts,
            { name: data.name, number: data.number, id: nanoid() },
          ],
        });
  };

  deleteContact = name => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.name !== name),
    });
  };

  render() {
    return (
      <StyledApp>
        <h1>Phone book</h1>
        <ContactForm onSubmit={this.handleFormData} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChange} />
        <ContactList
          items={this.state.contacts}
          filter={this.state.filter}
          delete={this.deleteContact}
        />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  display: block;
  border-radius: 10px;
  max-width: 500px;
  font-size: 24px;
  color: #010101;
  background-color: lightcoral;
  margin: 50px auto;
  padding: 15px;
`;
