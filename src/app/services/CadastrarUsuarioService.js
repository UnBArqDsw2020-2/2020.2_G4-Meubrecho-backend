import User from '../models/User'
import * as  cpfv  from 'cpf-cnpj-validator'; 
import Criptografia from  './crypto';

class CadastrarUsuarioService{
    async run(nome,email,senha,cpf,whatsapp){
        try{

            let verifyCPF = cpfv.cpf.isValid(cpf);
            console.log(verifyCPF)
            if(verifyCPF == false){
              return {error:"CPF Inválido"}
        
            }
            let findUser  = await User.findOne({email:email});
            if(findUser){
              return {error: "Erro, usuário já cadastrado"}
            }
        
            const senhaCrypto = await Criptografia.crypto(senha);
          
            const user = await User.create({
                  nome,
                  email,
                  senha: senhaCrypto,
                  cpf,
                  whatsapp,
            });

            return user;
        }catch(error){
            return {sucess: false, error: error}
        }
    }


}


export default new CadastrarUsuarioService()