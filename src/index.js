import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  HELLO_USER,
  BYE_USER,
  FILE_MANAGER_OPERATIONS
} from "./constants/constants.js";

import readFile from "./readFile/readFile.js";
import createFile from "./createFile/createFile.js";
import copyFile from "./copyFile/copyFile.js";
import renameFile from "./renameFile/renameFile.js";
import moveFile from "./moveFile/moveFile.js";
import deleteFile from "./deleteFile/deleteFile.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const startFileManager = () => {
  console.log(__dirname);
  console.log(HELLO_USER);


  process.stdin.on("data", (data) => {
    const input = data.toString().trim();

    if (input.startsWith(FILE_MANAGER_OPERATIONS.EXIT)) {
      console.log(BYE_USER);
      process.exit();
    }

    //Read File
    if (input.startsWith(FILE_MANAGER_OPERATIONS.READ)) {
      readFile(input);
    }

    //Create File
    if (input.startsWith(FILE_MANAGER_OPERATIONS.CREATE)) {
      createFile(input);
    }

    //Rename File
    if (input.startsWith(FILE_MANAGER_OPERATIONS.RENAME)) {
      renameFile(input);
    }

    //Delete File
    if (input.startsWith(FILE_MANAGER_OPERATIONS.DELETE)) {
      deleteFile(input);
    }

    //Copy File
    if (input.startsWith(FILE_MANAGER_OPERATIONS.COPY)) {
      copyFile(input);
    }

    //Move File
    if (input.startsWith(FILE_MANAGER_OPERATIONS.MOVE)) {
      moveFile(input);
    }
  });

  process.on("SIGINT", () => {
    console.log(BYE_USER);
    process.exit();
  });
};

startFileManager();