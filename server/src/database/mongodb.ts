import mongoose from 'mongoose';
import { DB_URI, NODE_ENV } from '../config/env';

if (!DB_URI) {
  throw new Error('Please define the DB_URI environment variable inside .env');
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI as string);

    console.log(`Connected to database in ${NODE_ENV} mode`);
  } catch (error: any) {
    console.error('Error connecting to database!', error.message);
    process.exit(1);
  }
};

export default connectToDatabase;
