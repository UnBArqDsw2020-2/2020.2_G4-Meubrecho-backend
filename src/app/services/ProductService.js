import Product from "../models/Product";

class ProductService {
  async productCreate(payload) {
    try {
      const product = await Product.create({
        nome: payload.nome,
        imagem: payload.imagem,
        descricao: payload.descricao,
        preco: payload.preco,
        user_id: payload.user_id,
      });

      return product;
    } catch (error) {
      return { sucess: false, error: error };
    }
  }
}

export default new ProductService();
