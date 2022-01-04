import UserModel from '../models/User'

class User {
  findAllUsers(): Promise<UserModel[]> {
    return [];
  }
}

export default new User;