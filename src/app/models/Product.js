import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  imagem: {
    type: String,
    required: true,
    default: "fakeImage.png",
  },
  descricao: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.User.ObjectId,
    ref: "User",
  },
  /* estado: {
      type: mongoose.Schema.Estado.ObjectId, ref: 'Estado'
    }
     tags: [
      {type: mongoose.Schema.Tag.ObjectId, ref: 'Tag'}
    ] */
});

export default mongoose.model("Product", ProductSchema);
