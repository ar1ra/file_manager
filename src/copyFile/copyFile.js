import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  OPERATION_FAILED,
  INVALID_DATA
} from "../constants/constants.js";

const copyFile = (input, __filename, __dirname) => {
  const filePath = input.split(" ")[1];
  const newDirectory = input.split(" ")[2];

  if (filePath && newDirectory) {
    if (
      path.isAbsolute(filePath) &&
      path.isAbsolute(newDirectory)
    ) {
      const readableStream = fs.createReadStream(path.resolve(filePath), "utf8");

      readableStream.on("data", (data) => {
        const writeStream = fs.createWriteStream(
          path.resolve(
            newDirectory,
            path.basename(filePath)
          ));
        writeStream.write(data);

        writeStream.on("error", () => {
          console.log(OPERATION_FAILED);
        });
      });

      readableStream.on("error", () => {
        console.log(OPERATION_FAILED);
      });
    }
    else {
      const readableStream = fs.createReadStream(path.join(__dirname, filePath), "utf8");

      readableStream.on("data", (data) => {
        const writeStream = fs.createWriteStream(
          path.join(
            __dirname,
            newDirectory,
            path.basename(filePath)
          ));
        writeStream.write(data);

        writeStream.on("error", () => {
          console.log(OPERATION_FAILED);
        });
      });

      readableStream.on("error", () => {
        console.log(OPERATION_FAILED);
      });
    }
  }
  else {
    console.log(INVALID_DATA);
  }

  setTimeout(() => console.log(`You are currently in: ${path.dirname(fileURLToPath(import.meta.url))}`), 100);
};

export default copyFile;