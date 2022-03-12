import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';

function Textarea({label, ...props}: TextareaProps): JSX.Element {
  return (
    <label>
      <span className={styles.label}>{label}</span>
      <textarea
        className={styles.textarea}
        {...props}
      />
    </label>
  );
}

export default Textarea;
