import { Router } from "express";

import Usercontroller from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ProductController from "./app/controllers/ProductController";
const routes = new Router();

//middlewares
import autenticadas from "./app/middlewares/auth";
import validacaoCadastroUsuario from "./app/validators/UsercadastrarUsuario";
import validacaoLoginUsuario from "./app/validators/SessionLogarUsuario";
import validacaoCadastrarProduto from "./app/validators/CadastrarProdutoValidator";
import ProductController from "./app/controllers/ProductController";

// rotas não autenticadas
// User routes
routes.post(
  "/users",
  validacaoCadastroUsuario,
  Usercontroller.cadastrarUsuario
);
routes.post("/sessions", validacaoLoginUsuario, SessionController.logarUsuario);

//middleware
routes.use(autenticadas);
// Todas rotas abaixo necessitam do usuário estar logado.

//Product routes
routes.post(
  "/product",
  validacaoCadastrarProduto,
  ProductController.criarProduto
);

routes.get(
  "/product/:id", 
  ProductController.buscarProduto
);


routes.post(
  "/product/:id/favorite/:favoriteId",
  validacaoCadastrarProduto,
  ProductController.favoritarProduto
)

export default routes;
