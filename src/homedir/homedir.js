import os from "node:os";

const homedir = () => {
  console.log(os.homedir());
};

export default homedir;