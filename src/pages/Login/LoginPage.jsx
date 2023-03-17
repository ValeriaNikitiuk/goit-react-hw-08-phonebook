import { LoginForm } from '../Login/LoginForm';
import s from './LoginForm.module.css';

export default function Login() {
  return (
    <div>
      <h1 className={s.login_text}>Login</h1>
      <LoginForm />
    </div>
  );
}
