import mongoose from "mongoose"

const TagSchema = new mongoose.Schema({
    Tag:{
        type: String,enum : [
            'Camisas','camisetas','Agasalhos','Vestidos','Bone','Chapeu','Outros',
            'Calça','Short','Saia','Tenis','Sandalia','Bota','Salto',   
        ],
    required: true,
    },    
})

export default mongoose.model("Tag", TagSchema);