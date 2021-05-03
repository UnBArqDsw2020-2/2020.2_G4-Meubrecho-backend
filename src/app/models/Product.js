const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tags = [
      "Camisas",
      "Camisetas",
      "Agasalhos",
      "Vestidos",
      "Bone",
      "Chapeu",
      "Outros",
      "Calça",
      "Short",
      "Saia",
      "Tenis",
      "Sandalia",
      "Bota",
      "Salto",
    ]

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

  tag: [{
    type: String,
		enum: Object.values(tags)
  }],
});

export default mongoose.model("Product", ProductSchema);
