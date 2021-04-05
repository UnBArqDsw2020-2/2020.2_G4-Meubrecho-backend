import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: Number,
    required: true,
  },

  product_favorite:[{
    type: Schema.Types.ObjectId,
    ref : "Product"
  }],
  
  cpf: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("User", UserSchema);
