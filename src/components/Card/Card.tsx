import { CardProps } from './Card.props';
import styles from './Card.module.css';

function Card({user, onActiveForm}: CardProps): JSX.Element {

  const handleClick = () => onActiveForm(user);

  return (
    <div className={styles.card}>
      <dl className={styles.cardList}>
        <div>
          <dd>ФИО:</dd>
          <dt>{user.name}</dt>
        </div>
        <div>
          <dd>город:</dd>
          <dt>{user.address.city}</dt>
        </div>
        <div>
          <dd>компания:</dd>
          <dt>{user.company.name}</dt>
        </div>
      </dl>
      <div className={styles.cardLink}>
        <span onClick={handleClick}>Подробнее</span>
      </div>
    </div>
  );
}

export default Card;
