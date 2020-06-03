import Promise from 'bluebird';
import { l } from '../../lib/logger';

let id = 0;

interface User {
  id: number,
  name: string
}

const users: User[] = [
  { id: id++, name: 'user 0' },
  { id: id++, name: 'user 1' }
];

export class UserService {
  all(): Promise<User[]> {
    l.info(users, 'fetch all users');
    return Promise.resolve(users);
  }

  byId(id: number): Promise<User> {
    l.info(`fetch user with id ${id}`);
    return this.all().then(r => r[id]);
  }

  create(name: string): Promise<User> {
    l.info(`create a user with name ${name}`);
    const user: User = {
      id: id++,
      name
    };
    users.push(user);

    return Promise.resolve(user);
  }
}

export default new UserService();
