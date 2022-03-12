import Htag from '../Htag/Htag';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';

import {UserListProps} from './UserList.props';
import styles from './UserList.module.css';

function UserList({users, onActiveForm}: UserListProps): JSX.Element {
  return (
    <>
      {!users && <Loader />}
      {users && <div>
        <Htag className={styles.mainHeader} tag='h2'>Список пользователей</Htag>
        <ul className={styles.userList}>
          {users?.map((user) => (
            <li key={user.id} className={styles.userItem}>
              <Card user={user} onActiveForm={onActiveForm} />
            </li>))}
        </ul>
        <span className={styles.counter}>Найдено {users?.length} пользователей</span>
      </div>}
    </>
  );
}

export default UserList;
