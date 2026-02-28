import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { FRONTEND_URL, PORT } from './config/env';

import jobRoutes from './src/routes/jobRoutes';
import applicationRoutes from './src/routes/applicationRoutes';
import connectToDatabase from './database/mongodb';

const app = express();

app.set('trust proxy', 1);

if (!FRONTEND_URL) throw new Error('FRONTEND_URL is not defined in .env file');

// Connect to MongoDB
connectToDatabase();

app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());

// API Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'QuickHire API is running'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
