import os from "node:os";

const getEOL = () => {
  console.log(JSON.stringify(os.EOL));
};

export default getEOL;