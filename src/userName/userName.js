import os from "node:os";

const userName = () => {
  console.log(os.userInfo().username);
};

export default userName;