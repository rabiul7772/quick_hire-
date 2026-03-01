import { config } from 'dotenv';

config({ path: '.env' });

export const {
  PORT,
  NODE_ENV,
  DB_URI,
  FRONTEND_URL,
  JWT_SECRET,
  JWT_EXPIRES_IN
} = process.env;
