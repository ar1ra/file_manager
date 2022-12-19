import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import {
  OPERATION_FAILED,
  INVALID_DATA
} from "../constants/constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hash = (input) => {
  const filePath = input.split(" ")[1];

  if (filePath) {
    if (path.isAbsolute(filePath)) {
      fs.readFile(path.resolve(filePath), "utf8", (err, data) => {
        if (err) {
          console.log(OPERATION_FAILED);
        }
        else {
          const hash = createHash("sha256").update(data).digest("hex");
          console.log(hash)
        }
      })
    }
    else{
      fs.readFile(path.join(__dirname, filePath), "utf8", (err, data) => {
        if (err) {
          console.log(OPERATION_FAILED);
        }
        else {
          const hash = createHash("sha256").update(data).digest("hex");
          console.log(hash)
        }
      })
    }
  }
  else {
    console.log(INVALID_DATA);
  }
};

export default hash;