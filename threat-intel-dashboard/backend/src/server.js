// backend/src/server.js
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/db.js';
import threatRoutes from './routes/threatRoutes.js';

dotenv.config();
await connectDB();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', threatRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
