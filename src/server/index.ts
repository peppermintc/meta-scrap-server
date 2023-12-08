import express from "express";
import cors from "cors";
import { PORT } from "../constants";
import { getMetaHandler } from "../handlers/getMetaHandler";

const app = express();

app.use(cors());

app.get("/meta", getMetaHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
