import { AvatarProps } from './Avatar.props';

import styles from './Avatar.module.css';

function Avatar({id, name}: AvatarProps): JSX.Element {
  return (
    <div className={styles.avatar}>
      <img src={`https://i.pravatar.cc/100?img=${id}`} alt={name} width={100} height={100}/>
    </div>
  );
}

export default Avatar;
