import axios from 'axios';
import { IUserItem } from '../interfaces/users.interface';

class Api {

  static #baseURL = 'https://jsonplaceholder.typicode.com/users';

  static async getUsers() {
    return await axios.get<IUserItem[]>(this.#baseURL);
  };
}

export default Api;
