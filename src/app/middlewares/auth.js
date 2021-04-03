
import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";
import { promisify } from "util";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(400).json({ error: "Token inválido" });
  }

  const [, token] = authHeader.split(" ");
  try {
    const decode = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decode.id;
    return next();
  } catch (error) {
    return res.status(401).json({ error: "token invalido" });
  }
};