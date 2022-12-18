import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  OPERATION_FAILED,
  INVALID_DATA
} from "../constants/constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createFile = (input) => {
  const fileName = input.split(" ")[1];

  if (fileName) {
    fs.writeFile(path.join(__dirname, fileName), "", (err) => {
      if (err) console.log(OPERATION_FAILED);
    })
  } else {
    console.log(INVALID_DATA);
  }
};

export default createFile;