import * as Yup from 'yup';


export default async(req,res,next)=>{
    try{
        const schema = Yup.object().shape({
            email: Yup.string()
            .email()
            .required(),
            senha: Yup.string()
            .required()
        });
        await schema.validate(req.body,{abortEarly:false});
        return next();
    }catch(error){
        return res.status(400).json({ error: "Erro de validação",messages:error.inner });
    }
};