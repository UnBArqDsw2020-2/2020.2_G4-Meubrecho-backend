import Product from "../models/Product";
import User from "../models/User"

class ProductService {
  async productCreate(payload) {
    try {
      const product = await Product.create({
        nome: payload.nome,
        imagem: payload.imagem,
        descricao: payload.descricao,
        preco: payload.preco,
        user_id: payload.user_id,
        tag: payload.tag,
      });

      return product;
    } catch (error) {
      return { sucess: false, error: error };
    }
  }
  async productGet(id) {
    try {
      const product = await Product.findById(id).populate("user_id");
      return product;
    } catch (error) {
      return { sucess: false, error: error };
    }
  }
  
  async productFavorite(user_id,productId){
    try {
      const product = await Product.findById(productId);
      if(product.user_id == user_id){
        return {Error:"Você não pode favoritar o seu própio produto!"}
      }
      
      await product.update({ $push: { user_favorite: user_id } });
      const productUpdate = await Product.findById(productId);
      return productUpdate;
      
    } catch (error) {
      return { sucess: false, error: error };
    }
  }
  async productsFavoriteGet(userId){
    try{
      const product_favorite = Product.user_favorite.findById(userId)
      return product_favorite
    } catch(error){
      return {sucess:false,error:error}
    }
  }
  async allProductsGet(){
    try{
      const allProducts = Product.find({})
      return (allProducts)
    }catch(error){
      return {sucess:false,error:error}
    }
  }

  async deleteProduct(productId,userId){
    try{
      const produto = await Product.findById(productId);
      const idUserOwner = produto.user_id;
      console.log(idUserOwner);
      if (idUserOwner == userId){
        const product = Product.findByIdAndRemove(productId)
        return product
      }
      return{ Error:"User não é o dono"}
    }catch(error){
      return {sucess:false,error:error}
    }
  }

  async todosMeusFavoritados(userId){
    try{
      const allProducts = await Product.find({user_favorite:userId}).populate('user_id');
      return allProducts;
    }catch(error){
      return { Error:error }
    }
  }


  async todosMeusProdutos(userId){
    try{
      const allProducts = await Product.find({user_id: userId});
      return allProducts;
    }catch(error){
      return { Error:error}
    }
  }

}

export default new ProductService();
