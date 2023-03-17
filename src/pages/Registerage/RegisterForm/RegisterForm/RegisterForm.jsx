import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

import s from './registerForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={s.loginbox}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className={s.userbox}>
          <label>
            <input
              className={s.forminput}
              type="text"
              placeholder="Name"
              name="name"
            />
          </label>
        </div>
        <div className={s.userbox}>
          <label>
            <input
              className={s.forminput}
              type="email"
              placeholder=" Email"
              name="email"
            />
          </label>
        </div>
        <div className={s.userbox}>
          <label>
            <input
              className={s.forminput}
              type="password"
              placeholder="Password"
              name="password"
            />
          </label>
        </div>
        <button className={s.btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
