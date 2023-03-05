import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import s from './contactsRemove.module.css';

export const ContactsRemove = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const hendleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <h3>
        {name}: {number}
      </h3>
      <button className={s.listButton} type="button" onClick={hendleDelete}>
        Delete
      </button>
    </>
  );
};

ContactsRemove.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
};
