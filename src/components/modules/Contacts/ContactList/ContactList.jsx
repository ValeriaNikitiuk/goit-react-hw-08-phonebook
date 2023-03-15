import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ContactsRemove } from 'components/modules/Contacts/ContactsRemove/ContactsRemove';
// import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { fetchContact } from '../../../../redux/Contacts/operations';
import { getStatusFilter } from '../../../../redux/Contacts/selectors';

const ContactList = () => {
  const filterContact = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <ul className={s.listContact}>
      {filterContact.map(({ name, number, id }) => (
        <li className={s.listItem} key={id}>
          <ContactsRemove name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
