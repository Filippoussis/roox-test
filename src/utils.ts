import { IUserItem } from './interfaces/users.interface';

const sortByCompany = (users: IUserItem[]) => {
  return users.slice().sort((user1, user2) => {
    const nameA = user1.company.name.toLowerCase();
    const nameB = user2.company.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }
)};

const sortByCity = (users: IUserItem[]) => {
  return users.slice().sort((user1, user2) => {
    const nameA = user1.address.city.toLowerCase();
    const nameB = user2.address.city.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }
)};

export {sortByCompany, sortByCity};
