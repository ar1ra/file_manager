import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  OPERATION_FAILED,
  INVALID_DATA
} from "../constants/constants.js";

const renameFile = (input, __filename, __dirname) => {
  const filePath = input.split(" ")[1];
  const newFileName = input.split(" ")[2];

  if (filePath && newFileName) {
    const fileExt = path.extname(filePath);
    const fileDir = path.dirname(filePath);
    const newFilePath = path.join(fileDir, `${newFileName + fileExt}`);
    
    if (path.isAbsolute(filePath)) {
      fs.rename(path.resolve(filePath), path.resolve(`${fileDir + "/" + newFileName + fileExt}`), (err) => {
        if (err) console.log(OPERATION_FAILED);
      })
    }
    else {
      fs.rename(path.join(__dirname, filePath), path.join(__dirname, newFilePath), (err) => {
        if (err) console.log(OPERATION_FAILED);
      })
    }
  } else {
    console.log(INVALID_DATA);
  }
  setTimeout(() => console.log(`You are currently in: ${path.dirname(fileURLToPath(import.meta.url))}`), 100);
};

export default renameFile;