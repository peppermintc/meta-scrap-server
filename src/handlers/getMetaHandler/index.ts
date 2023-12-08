import { Request, Response } from "express";
import { ALLOW_KEY_LIST } from "../../constants";
import { fetchMetaData } from "../../utils";

const getMetaHandler = async (req: Request, res: Response) => {
  const url = String(req.query.url);
  const key = String(req.query.key);

  try {
    if (!url) {
      throw new Error("URL parameter is required.");
    }

    if (!ALLOW_KEY_LIST.includes(key)) {
      throw new Error("Invalid key provided.");
    }

    const meta = await fetchMetaData(url);
    res.json(meta);
  } catch (error: any) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};

export { getMetaHandler };
