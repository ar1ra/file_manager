import fsPromises from "node:fs/promises";
import path from "node:path";
import { showHomedir, INVALID_DATA, OPERATION_FAILED } from "../constants/constants.js";

export const up = () => {
  const newDirectory = path.resolve(showHomedir.get(), "..")
  showHomedir.set(newDirectory);
  console.log(`You are currently in: ${showHomedir.get()}`);
};

export const cd = async (input) => {
  const directoryPath = input.split(" ")[1];

  if (directoryPath) {
    try {
      const directory = await fsPromises.stat(directoryPath);
      if (directory.isFile()) {
        console.log(OPERATION_FAILED);
      }
      else {
        showHomedir.set(path.resolve(showHomedir.get(), directoryPath));
      }
    } catch (error) {
      console.log(OPERATION_FAILED);
    }
  }
  else {
    console.log(INVALID_DATA)
  }

  console.log(`You are currently in: ${showHomedir.get()}`);
};

export const ls = async () => {
  try {
    const dir = await fsPromises.readdir(showHomedir.get(), { withFileTypes: true });
    const dirTypes = dir.map((el) => {
      return {
        name: el.name,
        type: el.isFile() ? "file" : "directory"
      }
    }).sort((a,b) => a.type.localeCompare(b.type))
    console.table(dirTypes)
  } catch (error) {
    console.log(OPERATION_FAILED)
  }

  console.log(`You are currently in: ${showHomedir.get()}`);
};