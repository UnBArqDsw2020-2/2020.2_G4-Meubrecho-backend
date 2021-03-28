import { Router } from 'express';


import Usercontroller from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
const routes = new Router();

import autenticadas from "./app/middlewares/auth";



// rotas não autenticadas

routes.post('/', Usercontroller.cadastrarUsuario);
routes.post('/login',SessionController.logarUsuario)


// rotas que precisam de autenticação

routes.use(autenticadas);


// Essa rota é teste para verificar a autenticação (excluirdepois)
routes.get("/",Usercontroller.teste);



export default routes;
