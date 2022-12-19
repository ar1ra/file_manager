import os from "node:os";

const getCPUS = () => {
  console.log(os.cpus().map(cpu => {
    return  {
      model: cpu.model.split("@")[0].trim(),
      speed: Number((cpu.speed / 1000).toFixed(2))
    }
  }));
};

export default getCPUS;