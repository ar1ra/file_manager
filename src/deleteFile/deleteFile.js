import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  OPERATION_FAILED,
  INVALID_DATA
} from "../constants/constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const deleteFile = (input) => {
  const filePath = input.split(" ")[1];

  if (filePath) {
    if (path.isAbsolute(filePath)) {
      fs.rm(path.resolve(filePath), (err) => {
        if (err) console.log(err);
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
};

export default deleteFile;