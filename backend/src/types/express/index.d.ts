import express from "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        walletAddress: string;
      };
    }
  }
}
