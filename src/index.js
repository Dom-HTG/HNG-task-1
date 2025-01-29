import express from 'express';
import cors from 'cors';
import router from '../src/routes/routes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
};

// app level middlewares.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Register routes.
app.use('/api', router);

app.listen(process.env.APP_PORT, () => console.log(`Listening on port: ${process.env.APP_PORT}`));