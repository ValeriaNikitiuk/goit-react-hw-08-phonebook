import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Filter from './Filter/Filter';
import NavBar from '../components/NavBar/NavBar';
import { selectIsLoading, selectError } from '../redux/selectors';
import { useSelector } from 'react-redux';
import UserRoutes from 'UserRoutes';
import store from './redux/store';

const App = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <UserRoutes />
        <h1>Phonebook</h1>
        <ContactForm />
        <h1>Contacts</h1>
        <Filter />
        {/* {isLoading && !error && <b>Request in progress...</b>} */}
        <ContactList />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
