import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  HELLO_USER,
  BYE_USER,
  FILE_MANAGER_OPERATIONS,
  showHomedir
} from "./constants/constants.js";

import {
  up,
  cd,
  ls
} from "./cd/cd.js";

import readFile from "./readFile/readFile.js";
import createFile from "./createFile/createFile.js";
import copyFile from "./copyFile/copyFile.js";
import renameFile from "./renameFile/renameFile.js";
import moveFile from "./moveFile/moveFile.js";
import deleteFile from "./deleteFile/deleteFile.js";

import getEOL from "./getEOL/getEOL.js";
import getCPUS from "./getCPUS/getCPUS.js";
import homedir from "./homedir/homedir.js";
import userName from "./userName/userName.js";
import architecture from "./architecture/architecture.js";

import hash from "./hash/hash.js";

import compress from "./compress/compress.js";
import deCompress from "./decompress/decompress.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const startFileManager = () => {
  console.log(HELLO_USER);
  console.log(`You are currently in: ${showHomedir.get()}\n`);


  process.stdin.on("data", (data) => {
    const input = data.toString().trim();

    if (input.startsWith(FILE_MANAGER_OPERATIONS.EXIT)) {
      console.log(BYE_USER);
      process.exit();
    }

    //UP
    if (input.startsWith(FILE_MANAGER_OPERATIONS.UP)) {
      up();
    }

    //CD
    if (input.startsWith(FILE_MANAGER_OPERATIONS.CD)) {
      cd(input);
    }

    //LS
    if (input.startsWith(FILE_MANAGER_OPERATIONS.LS)) {
      ls();
    }

    //Read File
    if (input.startsWith(FILE_MANAGER_OPERATIONS.READ)) {
      readFile(input, __filename, __dirname);
    }

    //Create File
    if (input.startsWith(FILE_MANAGER_OPERATIONS.CREATE)) {
      createFile(input, __dirname);
    }

    //Rename File
    if (input.startsWith(FILE_MANAGER_OPERATIONS.RENAME)) {
      renameFile(input, __filename, __dirname);
    }

    //Delete File
    if (input.startsWith(FILE_MANAGER_OPERATIONS.DELETE)) {
      deleteFile(input, __filename, __dirname);
    }

    //Copy File
    if (input.startsWith(FILE_MANAGER_OPERATIONS.COPY)) {
      copyFile(input, __filename, __dirname);
    }

    //Move File
    if (input.startsWith(FILE_MANAGER_OPERATIONS.MOVE)) {
      moveFile(input, __filename, __dirname);
    }

    //Get EOL
    if (input.startsWith(FILE_MANAGER_OPERATIONS.GETEOL)) {
      getEOL();
    }

    //Get CPUS
    if (input.startsWith(FILE_MANAGER_OPERATIONS.GETCPUS)) {
      getCPUS();
    }

    //Get Homedir
    if (input.startsWith(FILE_MANAGER_OPERATIONS.HOMEDIR)) {
      homedir();
    }

    //Get username
    if (input.startsWith(FILE_MANAGER_OPERATIONS.USERNAME)) {
      userName();
    }

    //Get architecture
    if (input.startsWith(FILE_MANAGER_OPERATIONS.ARCHITECTURE)) {
      architecture();
    }

    //Hash
    if (input.startsWith(FILE_MANAGER_OPERATIONS.HASH)) {
      hash(input, __dirname);
    }

    //Compress
    if(input.startsWith(FILE_MANAGER_OPERATIONS.COMPRESS)){
      compress(input, __dirname);
    }

    //Decompress
    if(input.startsWith(FILE_MANAGER_OPERATIONS.DECOMPRESS)){
      deCompress(input, __dirname);
    }
  });

  process.on("SIGINT", () => {
    console.log(BYE_USER);
    process.exit();
  });
};

startFileManager();