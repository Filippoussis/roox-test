import cn from 'classnames';
import styles from './Loader.module.css';

function Loader(): JSX.Element {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderContainer}>
        <div className={cn(styles.loaderBubble, styles.loaderBubble1)}></div>
        <div className={cn(styles.loaderBubble, styles.loaderBubble2)}></div>
        <div className={cn(styles.loaderBubble, styles.loaderBubble3)}></div>
      </div>
    </div>
  )
}

export default Loader;
