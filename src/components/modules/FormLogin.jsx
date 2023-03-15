import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = eve => {
    e.preventDefault();
    const form = eve.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email: <Input type="email" name="email" />
      </label>
      <label>
        Password: <Input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
