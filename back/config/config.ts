import dotenv from 'dotenv';
import Config from '../interfaces/config';

dotenv.config();

const config: Config = {
  app: {
    port: Number(process.env.PORT) || 3001
  },
  db: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
}

export default config;