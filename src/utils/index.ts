import og from "open-graph";

async function fetchMetaData(url: string): Promise<object> {
  return new Promise((resolve, reject) => {
    og(url, (err, meta) => {
      if (err) {
        return reject(err);
      }

      if (!meta) {
        return reject(new Error("No metadata found for the provided URL."));
      }

      resolve(meta);
    });
  });
}

export { fetchMetaData };
