import { useState } from 'react';
import { nanoid } from 'nanoid';
import { StyledForm } from './StyledForm';
import useItemsSlice from 'redux/itemsSlice/itemsHook';

export const ContactForm = () => {
  const nameId = nanoid();
  const numberId = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { items, addItem } = useItemsSlice();

  const handleSubmit = e => {
    e.preventDefault();
    const alreadyAdded = items.some(obj => obj.name === name);
    alreadyAdded
      ? alert(`Contact ${name} has already added`)
      : addItem({ name, number });
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor={nameId}>Name</label>
        <input
          onChange={handleChange}
          id={nameId}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div>
        <label htmlFor={numberId}>Number</label>
        <input
          onChange={handleChange}
          id={numberId}
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>

      <button type="submit">Add contact</button>
    </StyledForm>
  );
};
