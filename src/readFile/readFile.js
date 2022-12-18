import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  OPERATION_FAILED,
  INVALID_DATA
} from "../constants/constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFile = (input) => {
  const filePath = input.split(" ")[1];

  if (filePath) {
    if (path.isAbsolute(filePath)) {
      const readableStream = fs.createReadStream(path.resolve(filePath), "utf8");

      readableStream.on("data", (data) => {
        console.log(data);
      })

      readableStream.on("error", () => {
        console.log(OPERATION_FAILED);
      })
    }
    else {
      const readableStream = fs.createReadStream(path.join(__dirname, filePath), "utf8");

      readableStream.on("data", (data) => {
        console.log(data);
      })

      readableStream.on("error", () => {
        console.log(OPERATION_FAILED);
      })
    }

  } else {
    console.log(INVALID_DATA);
  }
};

export default readFile;