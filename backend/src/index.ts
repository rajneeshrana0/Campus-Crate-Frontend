// src/index.ts
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import jwt from "jsonwebtoken";
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from "./types";
import { CONFIG } from "./config";

const app: Application = express();
const port = process.env.APP_PORT || 3000;

app.set("port", port);
app.disable("x-powered-by");

var corsOptions = {
  origin: ["http://localhost:3001", "http://localhost:3000", "https://v2.blockstarz.xyz"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Express Middleware
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

const server = require("http").Server(app);

try {
  server.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error}`);
}
