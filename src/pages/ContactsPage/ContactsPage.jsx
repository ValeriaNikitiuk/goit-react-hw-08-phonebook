import ContactForm from '../../components/modules/Contacts/ContactForm/ContactForm';
import Filter from '../../components/modules/Contacts/Filter/Filter';
import ContactsList from '../../components/modules/Contacts/ContactList/ContactList';
import { selectIsLoading, selectError } from '../../redux/Contacts/selectors';
import { useSelector } from 'react-redux';

const ContactPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <main>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <Filter />
        {isLoading && !error && `...Loading`}
        <ContactsList />
      </div>
    </main>
  );
};

export default ContactPage;
