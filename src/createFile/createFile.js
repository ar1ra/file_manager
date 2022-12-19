import fs from "node:fs";
import path from "node:path";
import {
  OPERATION_FAILED,
  INVALID_DATA,
  showHomedir
} from "../constants/constants.js";

const createFile = (input, __dirname) => {
  const fileName = input.split(" ")[1];

  if (fileName) {
    fs.writeFile(path.join(__dirname, fileName), "", (err) => {
      if (err) console.log(OPERATION_FAILED);
    })
  } else {
    console.log(INVALID_DATA);
  }
  setTimeout(() => console.log(`You are currently in: ${showHomedir.get()}`), 100);
};

export default createFile;