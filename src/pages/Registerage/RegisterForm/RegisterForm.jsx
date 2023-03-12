import initialState from './initialState.js';
import useForm from '../../../hooks/useForm';
import TextField from 'TextField/TextField';
import fields from './fields';
import s from './registerForm.module.css';
import Button from 'components/shared/button/button.jsx';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
