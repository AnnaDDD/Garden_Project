import React from 'react'
import styles from './Button.module.css';

function Button({ content, text, type, ...other }) {
  return (
		<button
			className={`${styles.button} ${styles[content]}`}
			{...other}
			type={type}
		>
			{text}
		</button>
  )
}

export default Button