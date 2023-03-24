const crypto = require("crypto");

export const generateRandomId = (length: number = 8) =>
  crypto.randomBytes(length).toString("hex");
