import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import './database';
import cors from "cors";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.server.use(cors());
  }

  middlewares() {
    // cors({origin: 'http://google.com'}) delimitar frontend
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

}

export default new App().server;
