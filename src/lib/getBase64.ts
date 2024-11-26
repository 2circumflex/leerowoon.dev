import fs from "node:fs/promises";
import path from "node:path";
import { getPlaiceholder } from "plaiceholder";

export const getBase64 = async (src: string) => {
  const buffer = await fs.readFile(path.join("./public", src));

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};
