import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { FRONTEND_URL, PORT } from './config/env';
import jobRouter from './src/routes/job.routes';
import applicationRouter from './src/routes/application.routes';
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
app.use('/api/v1/jobs', jobRouter);
app.use('/api/v1/applications', applicationRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'QuickHire API is running'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
