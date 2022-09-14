import { StyledApp } from './StyledApp';
import { ContactForm } from '../../components/Form/Form';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';

export default function ContactsView() {
  return (
    <StyledApp>
      <h1>Phone book</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </StyledApp>
  );
}
