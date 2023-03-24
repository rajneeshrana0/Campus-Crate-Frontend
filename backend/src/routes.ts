import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { body, param, validationResult } from "express-validator";
import AuthServices from "./services/AuthServices.service";
import UserServices from "./services/UserServices.service";
import { authenticateToken, getJwtToken } from "./utils/jwt_utils";

const router = express.Router();

dotenv.config();

// ping
router.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong");
});

// register-user
router.post(
  "/register-user",
  body("firstName", "First name is required").notEmpty(),
  body("lastName", "Last name is required").notEmpty(),
  body("age", "Age is required").notEmpty(),
  body("email", "Email is required").notEmpty(),
  body("email", "Email is invalid").isEmail(),
  body("phone", "Phone number is required").notEmpty(),
  body("role", "Role is required").notEmpty(),
  body("role", "Role is invalid").matches(/\b(?:student|admin|manager)\b/),
  body("password", "Password is required").notEmpty(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    try {
      const firstName = req.body.firstName as string;
      const lastName = req.body.lastName as string;
      const age = req.body.age as string;
      const email = req.body.email as string;
      const phone = req.body.phone as string;
      const password = req.body.password as string;
      const role = req.body.role as "student" | "admin" | "manager";

      const authServicesObj = new AuthServices();
      const userServicesObj = new UserServices();

      const existingUserRecordObj = await authServicesObj.getUserRecord({ email: email });

      if (existingUserRecordObj) {
        return res.status(422).send({ success: "error", errors: "Email is already registered" });
      }

      const postData = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        phone: phone,
        role: role,
        password: password,
      };

      const userCreateRequestObj = await userServicesObj.createRecord(postData);

      return res.status(200).send({ status: "ok", data: userCreateRequestObj });
    } catch (error: any) {
      return res.status(422).send({ success: "error", errors: error.message });
    }
  }
);

// login
router.post(
  "/login",
  body("email", "Email is required").notEmpty(),
  body("email", "Email is invalid").isEmail(),
  body("password", "Password is required").notEmpty(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    try {
      const email = req.body.email as string;
      const password = req.body.password as string;

      const authServicesObj = new AuthServices();

      const postData = {
        email: email,
        password: password,
      };

      const userObj = await authServicesObj.validateUserLogin(postData);

      const jwtToken = await getJwtToken({
        id: userObj.id,
        email: userObj.email,
      });

      console.log(jwtToken)   

      return res.status(200).send({ status: "ok", token: jwtToken });
    } catch (error: any) {
      return res.status(422).send({ success: "error", errors: error.message });
    }
  }
);

// get-user-profile
router.get(
  "/get-user-profile",
  authenticateToken,
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const authServicesObj = new AuthServices();
      const userObj = await authServicesObj.getUserRecord(req.user!.id);

      if (!userObj) {
        throw new Error("Invalid access");
      }

      const returnData = {
        email: userObj.email,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        age: userObj.age,
        role: userObj.role,
      };

      return res.status(200).send({ success: "ok", data: returnData });
    } catch (error: any) {
      return res.status(422).send({ success: "error", errors: error.message });
    }
  }
);

module.exports = router;
