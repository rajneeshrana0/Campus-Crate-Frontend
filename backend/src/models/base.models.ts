import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient({
  // log: [
  //   {
  //     emit: "event",
  //     level: "query",
  //   },
  // ],
});

// prisma.$on("query", (e: any) => {
//   console.log("Query: " + e.query);
//   console.log("Params: " + e.params);
//   console.log("Duration: " + e.duration + "ms");
// });

export class BaseModel {
  public prisma = prisma;
}
