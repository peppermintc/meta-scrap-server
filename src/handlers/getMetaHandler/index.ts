import { Request, Response } from "express";
import { ALLOW_KEY_LIST } from "../../constants";
import { fetchMetaData } from "../../utils";

const getMetaHandler = async (req: Request, res: Response) => {
  const url = req.query.url?.toString();
  const key = req.query.key?.toString();

  try {
    if (!key) {
      throw new Error("key query string required");
    }

    if (!ALLOW_KEY_LIST.includes(key)) {
      throw new Error("key not allowed");
    }

    if (!url) {
      throw new Error("URL query string required");
    }

    const meta = await fetchMetaData(url);
    res.json(meta);
  } catch (error: any) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};

export { getMetaHandler };
