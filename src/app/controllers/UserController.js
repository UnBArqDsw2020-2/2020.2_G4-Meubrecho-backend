
import User from '../models/User';
import bcrypt from "bcryptjs";
import { cpf } from 'cpf-cnpj-validator'; 
import * as Yup from "yup";
class UserController {

  async cadastrarUsuario(req,res){

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      cpf: Yup.string().required(),
      whatsapp: Yup.string().required(),
      email: Yup.string()
      .email()
      .required(),
      senha: Yup.string()
      .required()
    });

  if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro de validação" });
  }     
  
    const { email,senha } = req.body;
    let verifyCPF = cpf.isValid(req.body.cpf);
    if(verifyCPF == false){
      return res.status(400).json({error:"CPF Inválido"})

    }
    const senhaCrypto = await bcrypt.hash(senha,8);
    let user  = await User.findOne({email:email});
    if(user){
      return res.status(400).json({error:"Usuário já cadastrado"})
    }
  
      user = await User.create({
        nome: req.body.nome,
        email:email,
        senha: senhaCrypto,
        cpf: req.body.cpf,
        whatsapp: req.body.whatsapp
      })
    
    return res.json(user);
    
  }

  // código de teste para verificar a autenticação
  async teste(req,res){
    console.log("o id do usuário logado é:",req.userId);
    return res.json(req.userId);
  }

}

export default new UserController();
