import { InputProps } from './Input.props';
import styles from './Input.module.css';

function Input({label, ...props}: InputProps): JSX.Element {
  return (
    <>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.input}
        {...props}
      />
    </>
  );
}

export default Input;
