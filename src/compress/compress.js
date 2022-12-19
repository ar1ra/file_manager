import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { pipeline } from "node:stream";
import { fileURLToPath } from "node:url";
import {
  OPERATION_FAILED,
  INVALID_DATA
} from "../constants/constants.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = (input) => {
  const filePath = input.split(" ")[1];
  const newDestination = input.split(" ")[2];

  if (filePath && newDestination) {
    const fileName = path.basename(filePath).split(".")[0];

    if (path.isAbsolute(filePath) && path.isAbsolute(newDestination)) {
      pipeline(
        fs.createReadStream(path.resolve(filePath)),
        zlib.createBrotliCompress(),
        fs.createWriteStream(path.resolve(newDestination, `${fileName}.br`)),
        (err) => {
          if (err) {
            console.log(OPERATION_FAILED);
            process.exitCode = 1;
          }
        }
      );
    }
    else {
      pipeline(
        fs.createReadStream(path.join(__dirname, filePath)),
        zlib.createBrotliCompress(),
        fs.createWriteStream(path.join(__dirname, newDestination, `${fileName}.br`)),
        (err) => {
          if (err) {
            console.log(OPERATION_FAILED);
            process.exitCode = 1;
          }
        }
      );
    }
  }
  else {
    console.log(INVALID_DATA);
  }
};

export default compress;