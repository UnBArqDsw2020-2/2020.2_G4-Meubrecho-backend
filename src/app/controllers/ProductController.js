import nodemon from "nodemon";
import ProductService from "../services/ProductService";

class ProductController {
  async criarProduto(req, res) {
    const {nome,descricao,imagem,preco,tag} = req.body;
    const payload ={nome:nome,descricao:descricao,imagem:imagem,preco:preco,tag:tag}
    payload.user_id = req.userId;

    const product = await ProductService.productCreate(payload);
    return res.json(product);
  }
  async buscarProduto(req,res){
    const{id} = req.params

    const product = await ProductService.productGet(id)
    return res.json(product)
  }
  async favoritarProduto(req,res){
    const{id,favorite} = req.params
    
    if(favorite){
      const payload={
        id:id,
        favorite:favorite,
      }
      payload.user_id = req.userId

      const productFavorite = await ProductService.productFavorite(payload)
      return res.json(productFavorite)
    }
    return res.json({message:"favorite = false"})
  }

  async buscartodosProduto(req,res){
    const {favorite} = req.query
    
    if(favorite){
      const productsFavorite = await productsFavoriteGet(req.userId)
      return res.json(productsFavorite)
    }
    const allProducts = await allProductsGet()
    return res.json(allProducts)
  
  }
}

export default new ProductController();
