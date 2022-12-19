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

const deCompress = (input) => {
  const filePath = input.split(" ")[1];
  const newDestination = input.split(" ")[2];

  if (filePath && newDestination) {
    if (path.isAbsolute(filePath) && path.isAbsolute(newDestination)) {
      pipeline(
        fs.createReadStream(path.resolve(filePath)),
        zlib.createBrotliDecompress(),
        fs.createWriteStream(path.resolve(newDestination, path.basename(filePath))),
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
        zlib.createBrotliDecompress(),
        fs.createWriteStream(path.join(__dirname, newDestination, path.basename(filePath))),
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

export default deCompress;