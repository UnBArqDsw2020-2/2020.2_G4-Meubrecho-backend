import { Router } from 'express';


import Usercontroller from './app/controllers/UserController';
const routes = new Router();

routes.get('/', Usercontroller.index);

export default routes;
