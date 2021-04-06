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
  async productFavorite(payload){
    try {
      const product = await Product.findById(payload.id)
      product.user_favorite.push(payload.user_id)
    
      return {
        product:product,
      }
      
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
  async deleteProduct(id,userId){
    try{
      const idUserOwner = Product.user_id.id
      if (idUserOwner == userId){
        const product = Product.findByIdAndRemove(id)
        return product
      }
      return{message:"User not owner"}
    }catch(error){
      return {sucess:false,error:error}
    }
  }

}

export default new ProductService();
