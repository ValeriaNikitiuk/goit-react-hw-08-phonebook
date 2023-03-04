import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ContactsRemove } from 'components/ContactsRemove/ContactsRemove';
// import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { fetchContact } from '../../redux/operations';
import { getStatusFilter } from '../../redux/selectors';

const ContactList = () => {
  const filterContact = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <ul className={s.listContact}>
      {filterContact.map(({ name, number, id }) => (
        <li className={s.listItem}>
          <ContactsRemove name={name} number={number} id={id} key={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
