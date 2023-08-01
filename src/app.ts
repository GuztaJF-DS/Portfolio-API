import express from 'express';
import cors from 'cors';
import route from './route';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(route);

export default app;
