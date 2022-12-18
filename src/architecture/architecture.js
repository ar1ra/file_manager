import os from "node:os";

const architecture = () => {
  console.log(os.arch());
};

export default architecture;