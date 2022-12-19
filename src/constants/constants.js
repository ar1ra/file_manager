import os from "node:os";

export const FILE_MANAGER_OPERATIONS = {
  READ: "cat",
  CREATE: "add",
  RENAME: "rn",
  MOVE: "mv",
  COPY: "cp",
  DELETE: "rm",
  EXIT: ".exit",
  GETEOL: "os --EOL",
  GETCPUS: "os --cpus",
  HOMEDIR: "os --homedir",
  USERNAME: "os --username",
  ARCHITECTURE: "os --architecture",
  HASH: "hash",
  COMPRESS: "compress",
  DECOMPRESS: "decompress",
  UP: "up",
  CD: "cd",
  LS: "ls"
};
export const INVALID_DATA = "Invalid data";
export const OPERATION_FAILED = "Operation failed";
export const HELLO_USER = `Welcome to the File Manager, ${process.argv[2].split("=")[1]}!\n`;
export const BYE_USER = `\nThank you for using File Manager, ${process.argv[2].split("=")[1]}, goodbye!`;
export const showHomedir = {
  homedir: os.homedir(),
  get: function() {
    return this.homedir
  },
  set: function(newHomeDir) {
    return this.homedir = newHomeDir
  }
};