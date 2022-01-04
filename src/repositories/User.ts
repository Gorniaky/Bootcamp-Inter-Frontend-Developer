import db from '../db';
import User from '../models/user';

export default new class {
  async findAllUsers(): Promise<User[]> {
    const query = `
    SELECT uuid, username
    FROM application_user
    `;
    const { rows } = await db.query<User>(query)
    return rows || [];
  }

  async findById(uuid: string): Promise<User> {
    const query = `
    SELECT uuid, username
    FROM application_user
    WHERE uuid = $1
    `;
    const { rows } = await db.query<User>(query, [uuid])
    return rows[0];
  }

  async create(user: User): Promise<string> {
    const query = `
    INSERT INTO application_user (
      username,
      password
    ) VALUES ($1, crypt($2, 'salt'))
    RETURNING uuid
    `;
    const { rows } = await db.query<{ uuid: string }>(query, [user.username, user.password]);
    return rows[0].uuid;
  }

  async update(user: User): Promise<void> {
    const query = `
    UPDATE application_user SET
      username = $1,
      password = crypt($2, 'salt')
    WHERE uuid = $3
    `;
    await db.query(query, [user.username, user.password, user.uuid]);
  }

  async deleteById(uuid: string): Promise<void> {
    const query = `
    DELETE FROM application_user 
    WHERE uuid = $1
    `;
    await db.query(query, [uuid]);
  }
}