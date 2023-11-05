import express from 'express';
import cors from 'cors';
import connectionAdapter from './adapter/mongo.adapter.js';
import routes from './api/routes.js';
import { config } from 'dotenv';
import jwtMiddleware from './api/middleware/jwt.middleware.js';

config();

const app = express();

connectionAdapter.connect();
app.use(express.json());
app.use(cors());
app.use(jwtMiddleware.initialize())
routes(app);


app.listen(process.env.SERVER_PORT, () => console.log(`Running at http://localhost:${process.env.SERVER_PORT}`));
