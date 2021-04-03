import nodemon from "nodemon";
import ProductService from "../services/ProductService";

class ProductController {
  async criarProduto(req, res) {
    const {nome,imagem,descricao,preco} = req.body;
    const payload ={nome:nome,descricao:descricao,imagem:imagem,preco:preco}
    payload.user_id = req.userId;

    const product = await ProductService.productCreate(payload);
    return res.json(product);
  }
}

export default new ProductController();
