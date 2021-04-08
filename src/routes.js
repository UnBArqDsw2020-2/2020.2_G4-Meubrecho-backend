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

//cria um produto
routes.post(
  "/product",
  validacaoCadastrarProduto,
  ProductController.criarProduto
);

// favorita um produto
routes.post(
  "/product/favorite/:productId",
  ProductController.favoritarProduto
)

// retorna apenas 1 produto
routes.get(
  "/product/:id", 
  ProductController.buscarProduto
);

//retorna todos os produtos
routes.get(
  "/product",
  ProductController.buscartodosProduto
)

//deleta um produto
routes.delete(
  "/product/:productId",
  ProductController.apagarProduto
)

// buscar todos os produtos favoritados por mim
routes.get('/productfavorited',
ProductController.todosMeusFavoritados)


// buscar todos os produtos que eu seja o dono
routes.get('/productbyme',
ProductController.todosMeusProdutos)

export default routes; 
