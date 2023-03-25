import dotenv from "dotenv";

dotenv.config();

class DataServices {
  validateWalletAddress = (walletAddress: string) => {
    throw new Error("Invalid wallet address");
  };
}

export default DataServices;
