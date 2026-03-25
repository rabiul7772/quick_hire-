import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { FRONTEND_URL, PORT } from './config/env.js';
import jobRouter from './routes/job.routes.js';
import applicationRouter from './routes/application.routes.js';
import authRouter from './routes/auth.routes.js';
import connectToDatabase from './database/mongodb.js';
import healthCheckRouter from './routes/health.routes.js';

const app = express();

app.set('trust proxy', 1);

if (!FRONTEND_URL) throw new Error('FRONTEND_URL is not defined in .env file');

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
app.use('/api/v1/health-check', healthCheckRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobRouter);
app.use('/api/v1/applications', applicationRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'QuickHire API is running'
  });
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  // Connect to MongoDB
  await connectToDatabase();
});
