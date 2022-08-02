import { Component } from 'react';
import { StyledApp } from './StyledApp';
import { nanoid } from 'nanoid';
import { ContactForm } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

const LS_KEY = 'contacts';

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

  componentDidMount = () => {
    const contactsParsed = JSON.parse(localStorage.getItem(LS_KEY));
    contactsParsed && this.setState({ contacts: contactsParsed });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
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

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
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
          deleter={this.deleteContact}
        />
      </StyledApp>
    );
  }
}
