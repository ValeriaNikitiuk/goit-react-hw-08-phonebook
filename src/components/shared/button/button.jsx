import s from './button.module.css';

const Button = ({ children, type = 'submit' }) => {
  return (
    <button className={s.btn} tupe={type}>
      {children}
    </button>
  );
};

export default Button;
