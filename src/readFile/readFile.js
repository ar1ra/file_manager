import fs, { readSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  OPERATION_FAILED,
  INVALID_DATA
} from "../constants/constants.js";

const readFile = (input, __filename, __dirname) => {
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

      readableStream.on("end", () => {
        console.log(`You are currently in: ${path.dirname(fileURLToPath(import.meta.url))}`);
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

      readableStream.on("end", () => {
        console.log(`You are currently in: ${path.dirname(fileURLToPath(import.meta.url))}`);
      })
    }
  } else {
    console.log(INVALID_DATA);
  }
};

export default readFile;