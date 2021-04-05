import * as Yup from "yup";

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      imagem: Yup.string().required(),
      descricao: Yup.string().required(),
      preco: Yup.string().required(),
      favorite: Yup.boolean(), 
    });
    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Erro de validação", messages: error.inner });
  }
};
