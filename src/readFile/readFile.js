import fs from "node:fs";
import path from "node:path";
import {
  OPERATION_FAILED,
  INVALID_DATA,
  showHomedir
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
  setTimeout(() => console.log(`You are currently in: ${showHomedir.get()}`), 100);
};

export default readFile;