import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import s from './ContactForm.module.css';
import { useState } from 'react';
import { selectIsLoading } from '../../redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const contact = { name, number };
    dispatch(addContact(contact));
    setName('');
    setNumber('');

    if (!name || !number) {
      alert('Please fill in all the fields!');
      return false;
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Number
        <input
          className={s.input}
          type="text"
          name="number"
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <button className={s.button} type="submit" disabled={loading}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
