import User from '../models/User'
import * as  cpfv  from 'cpf-cnpj-validator'; 
import Criptografia from  '../services/crypto'
class UserController {

  async cadastrarUsuario(req,res){   
  
    const { email,senha } = req.body;
    let verifyCPF = cpfv.cpf.isValid(req.body.cpf);
    if(verifyCPF == false){
      return res.status(400).json({error:"CPF Inválido"})

    }
    let findUser  = await User.findOne({email:email});
    if(findUser){
      return res.status(400).json({error:"Usuário já cadastrado"})
    }

    const senhaCrypto = await Criptografia.crypto(req.body.senha);
  
      const user = await User.create({
          nome: req.body.nome,
          email:email,
          senha: senhaCrypto,
          cpf: req.body.cpf,
          whatsapp: req.body.whatsapp
      });
    
    return res.json(user);
    
  }
    
  
  // código de teste para verificar a autenticação
  async teste(req,res){
    console.log("o id do usuário logado é:",req.userId);
    return res.json(req.userId);
  }



}

export default new UserController();
