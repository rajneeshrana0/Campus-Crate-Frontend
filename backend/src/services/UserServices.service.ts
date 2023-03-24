import dotenv from "dotenv";
import bcrypt from "bcrypt";
import UsersModel from "../models/UsersModel.model";

dotenv.config();

class UserServices {
  createRecord = async (data: {
    firstName: string | null;
    lastName: string;
    age: string;
    email: string;
    phone: string;
    role: string;
    password: string;
  }) => {
    try {
      const userModelObj = new UsersModel();
      const hashPassword = await bcrypt.hash(data.password, 10);

      const createDataObj = {
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        email: data.email,
        phone: data.phone,
        role: data.role,
        regId: `${Date.now()}`,
        password: hashPassword,
      };

      const createResObj = await userModelObj.create(createDataObj);

      return createResObj;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}

export default UserServices;
