import {IUserItem} from '../../interfaces/users.interface';

interface FormProps {
  user: IUserItem;
  onCloseForm: () => void;
}

export type {FormProps};
