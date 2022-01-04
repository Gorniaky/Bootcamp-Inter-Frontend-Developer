import { Pool } from 'pg';

const connectionString = 'postgres://dhtindhx:JeZAyNxsjW8iw5jTa4I83IKAsvkLzGEU@motty.db.elephantsql.com/dhtindhx'

export default new Pool({ connectionString });