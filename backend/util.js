import config from "./config";
import jwt from "jsonwebtoken";

const getToken = (user) => {
  return jwt.sign(user, config.JWT_SECREAT, {
    expiresIn: "48h",
  });
};
export{
    getToken
}