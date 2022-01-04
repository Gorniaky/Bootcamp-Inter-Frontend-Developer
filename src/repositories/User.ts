import db from '../db';
import User from '../models/user';

export default new class {
  async findAllUsers(): Promise<User[]> {
    const query = `
    SELECT uuid, username
    FROM application_user
    `;
    const res = await db.query<User>(query)
    return res.rows || [];
  }
}