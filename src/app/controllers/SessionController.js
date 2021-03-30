import User from '../models/User';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import authConfig  from '../../config/auth'
class SessionController{
    async logarUsuario(req,res){  
        const { email,senha } = req.body;

        
        const user = await User.findOne({email:email});

        if(!user){
           return res.status(401).json({error: "Usuário não cadastrado"});
        }

       const checkpassword = await bcrypt.compare(senha,user.senha);

       if(checkpassword == false){
           return res.status(400).json({error:"Senha Inválida"});
       }

       const {id,nome} = user;

       return res.json({
           user:{
                id,
                nome,
                email,
           },
           token: jwt.sign({id},authConfig.secret,{
            expiresIn: "1d"
        }),
       });
      


    }

}



export default new SessionController();