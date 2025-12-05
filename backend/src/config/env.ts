import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: process.env.PORT,
  STORAGE_BUCKET: process.env.STORAGE_BUCKET,
};

