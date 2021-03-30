import ProductService from "../services/ProductService";

class ProductController {
  async criarProduto(req, res) {
    let payload = {};
    payload = req.body;
    payload.user_id = req.userId;

    const product = await ProductService.productCreate(payload);
    return res.json(product);
  }
}

export default new ProductController();
