import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  OPERATION_FAILED,
  INVALID_DATA
} from "../constants/constants.js";

const deleteFile = (input, __filename, __dirname) => {
  const filePath = input.split(" ")[1];

  if (filePath) {
    if (path.isAbsolute(filePath)) {
      fs.rm(path.resolve(filePath), (err) => {
        if (err) console.log(OPERATION_FAILED);
      })
    }
    else {
      fs.rm(path.join(__dirname, filePath), (err) => {
        if (err) console.log(OPERATION_FAILED);
      })
    }
  }
  else {
    console.log(INVALID_DATA);
  }

  setTimeout(() => console.log(`You are currently in: ${path.dirname(fileURLToPath(import.meta.url))}`), 100);
};

export default deleteFile;