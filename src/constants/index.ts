import dotenv from "dotenv";

dotenv.config();

const PORT = 3010;
const ALLOW_KEY_LIST = process.env.ALLOW_KEY_LIST?.split(",") || [];

export { PORT, ALLOW_KEY_LIST };
