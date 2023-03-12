import s from './TextField.module.css';
import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div className={s.login_container}>
      <label htmlFor={id}>{label}</label>
      <input className={s.wrapper} id={id} onChange={handleChange} {...props} />
    </div>
  );
};

export default TextField;
