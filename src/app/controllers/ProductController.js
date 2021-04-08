
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
   
    const user_id = req.userId;
    const productId = req.params.productId;
    const productFavorite = await ProductService.productFavorite(
      user_id,
      productId,
    )
    return res.json(productFavorite)
    
    
  }

  async buscartodosProduto(req,res){
    const allProducts = await ProductService.allProductsGet()
    return res.json(allProducts)
  
  }

  async apagarProduto(req,res){
    const { productId } = req.params
    const userId = req.userId
    
    
    const productDeleted = await ProductService.deleteProduct(productId,userId)
    return res.json(productDeleted)
  }

  async todosMeusFavoritados(req,res){
    const userId = req.userId;
    const allProducts = await ProductService.todosMeusFavoritados(userId);
    return res.json(allProducts);
  }

  async todosMeusProdutos(req,res){
    const userId = req.userId
    const allProducts = await ProductService.todosMeusProdutos(userId);
    return res.json(allProducts);
  }

  

}

export default new ProductController();
