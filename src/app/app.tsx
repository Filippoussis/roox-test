import { useState, useEffect, useCallback } from 'react';

import Sort from '../components/Sort/Sort';
import UserList from '../components/UserList/UserList';
import Form from '../components/Form/Form';
import Avatar from '../components/Avatar/Avatar';

import styles from './app.module.css';

import { IUserItem } from '../interfaces/users.interface';
import { sortByCompany, sortByCity } from '../utils';

import Api from '../service/api';

function App(): JSX.Element {

  const [users, setUsers] = useState<IUserItem[] | null>(null);
  const [activeUser, setActiveUser] = useState<IUserItem | null>(null);

  const request = useCallback(() => {
    Api.getUsers().then(({data}) => setUsers(data));
  }, []);

  useEffect(() => request(), [request]);

  const onActiveForm = (user: IUserItem) => setActiveUser(user);
  const onCloseForm = () => setActiveUser(null);

  const onSortByCity = () => {
    if (!users) return;
    setUsers(sortByCity(users));
  }

  const onSortByCompany = () => {
    if (!users) return;
    setUsers(sortByCompany(users));
  }

  return (
    <div className={styles.app}>
      <div className={styles.leftColumn}>
        {activeUser === null
          ? <Sort onSortByCity={onSortByCity} onSortByCompany={onSortByCompany} />
          : <Avatar id={activeUser.id} name={activeUser.name} />}
      </div>
      <div className={styles.rightColumn}>
        {activeUser === null
          ? <UserList users={users} onActiveForm={onActiveForm} />
          : <Form user={activeUser} onCloseForm={onCloseForm} />}
      </div>
    </div>
  );
}

export default App;
