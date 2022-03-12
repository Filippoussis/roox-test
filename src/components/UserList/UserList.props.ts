import { IUserItem } from '../../interfaces/users.interface';

interface UserListProps {
  users: IUserItem[] | null;
  onActiveForm: (user: IUserItem) => void;
}

export type {UserListProps};
