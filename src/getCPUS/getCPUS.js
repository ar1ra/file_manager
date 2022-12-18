import os from "node:os";

const getCPUS = () => {
  console.log(os.cpus());
};

export default getCPUS;