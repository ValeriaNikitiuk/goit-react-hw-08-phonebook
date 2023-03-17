import { RegisterForm } from '../RegisterForm/RegisterForm';
import s from './registerForm.module.css';

export default function Register() {
  return (
    <div>
      <h1 className={s.reg_text}>Registration</h1>
      <RegisterForm />
    </div>
  );
}
