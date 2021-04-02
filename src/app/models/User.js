import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    senha: {
      type: String,
      required: true,
    },
    whatsapp:{
        type: Number,
        required: true,
    },
    cpf:{
        type: Number,
        required:true,
    }

  },

);

export default mongoose.model("User", UserSchema);