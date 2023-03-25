import jwt from "jsonwebtoken";
import { CONFIG } from "../config";

export const getJwtToken = async (data: any) => {
  const token = await jwt.sign(data, CONFIG.JWT_PRIVATE_KEY as string, {
    expiresIn: "1d",
  });

  return token;
};

// Middleware for EXpress
export const authenticateToken = (req: any, res: any, next: any) => {
  const token = req.headers["auth-token"];

  if (token === null) return res.sendStatus(401);

  jwt.verify(token, CONFIG.JWT_PRIVATE_KEY as string, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    // console.log(user);
    req.user = user;
    next();
  });
};

// Middleware for Express
export const getUserByToken = async (
  token: string
): Promise<jwt.VerifyErrors | any> => {
  return new Promise(function (resolve, reject) {
    jwt.verify(
      token,
      CONFIG.JWT_PRIVATE_KEY as string,
      function (err, decode: any) {
        if (err) {
          reject(err);
          return;
        }

        resolve(decode);
      }
    );
  });
};
