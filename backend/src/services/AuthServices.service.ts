import dotenv from "dotenv";
import bcrypt from "bcrypt";
import UsersModel from "../models/UsersModel.model";

dotenv.config();

class AuthServices {
  getUserRecord = async (condition: any = {}) => {
    try {
      const userModelObj = new UsersModel();
      const userObj = await userModelObj.getByParams(condition);

      return userObj;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  validateUserLogin = async (data: { email: string; password: string }) => {
    try {
      const userModelObj = new UsersModel();
      const userRecordObj = await userModelObj.getByParams({
        email: data.email,
      });

      if (!userRecordObj) {
        throw new Error("User is invalid");
      }

      const isPasswordValid = await bcrypt.compare(data.password, userRecordObj.password);

      if (!isPasswordValid) {
        throw new Error("Invalid credentials");
      }

      return userRecordObj;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}

export default AuthServices;
