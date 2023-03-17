import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import s from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={s.loginbox}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <input
            className={s.forminput}
            type="email"
            placeholder="Email"
            name="email"
          />
        </label>
        <label>
          <input
            className={s.forminput}
            type="password"
            placeholder="Password"
            name="password"
          />
        </label>
        <button className={s.btn} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};
