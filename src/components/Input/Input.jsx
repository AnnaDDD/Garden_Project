import styles from './Input.module.css';

import React from 'react';

function Input(props) {
  const {
    min,
    step,
    name,
    type,
    content,
    error_style,
    placeholder,
    phoneInput,
    ...other
  } = props;

  return (
    <input
	className={`${styles.input} ${styles[content]} ${styles[error_style]}`}
      type={type}
      name={name}
      placeholder={placeholder}
      min={min}
      step={step}
      {...phoneInput}
      {...other}
    />
  );
}

export default Input;
