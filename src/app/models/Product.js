const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  user_favorite:[{
    type: Schema.Types.ObjectId,
    ref:"User"
  }],

  tag: {
    type: Schema.Types.ObjectId,
    ref: "Tag",
  },
});

export default mongoose.model("Product", ProductSchema);
