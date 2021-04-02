import bcrypt from "bcryptjs";

class Criptografia {

    async crypto(senha){
        try{

            const senhaCrypto = await bcrypt.hash(senha,8);
            return senhaCrypto;

        }catch(error){

            throw {status:400,message:"Erro ao criptografar"};
        }

      
       

    }

}

export default new Criptografia();