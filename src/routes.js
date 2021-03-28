import { Router } from 'express';


import Usercontroller from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
const routes = new Router();


//middlewares
import autenticadas from "./app/middlewares/auth";
import validacaoCadastroUsuario from './app/validators/UsercadastrarUsuario'
import validacaoLoginUsuario from './app/validators/SessionLogarUsuario'



// rotas não autenticadas

routes.post('/users',validacaoCadastroUsuario,Usercontroller.cadastrarUsuario);
routes.post('/sessions',validacaoLoginUsuario,SessionController.logarUsuario)


//middleware
routes.use(autenticadas);
// Todas rotas abaixo necessitam do usuário estar logado.

// Essa rota é teste para verificar a autenticação (excluirdepois)
routes.get("/",Usercontroller.teste);



export default routes;
