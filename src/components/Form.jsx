import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

export class ContactForm extends Component {
  nameId = nanoid();
  numberId = nanoid();

  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>Name</label>
        <input
          onChange={this.handleChange}
          id={this.nameId}
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor={this.numberId}>Number</label>
        <input
          onChange={this.handleChange}
          id={this.numberId}
          type="tel"
          value={this.state.number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </StyledForm>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const StyledForm = styled.form`
  border: 2px solid grey;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 15px;
  label {
    display: block;
    margin-bottom: 10px;
  }
  input {
    display: block;
    margin-bottom: 10px;
  }
  button {
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
    :hover {
      background-color: coral;
    }
  }
`;
