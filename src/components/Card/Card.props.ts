import { IUserItem } from '../../interfaces/users.interface';

interface CardProps {
  user: IUserItem;
  onActiveForm: (user: IUserItem) => void;
}

export type {CardProps};
