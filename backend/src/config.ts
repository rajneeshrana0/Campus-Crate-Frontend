import dotenv from "dotenv";
dotenv.config();

export const CONFIG = {
  JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY || "",
};
