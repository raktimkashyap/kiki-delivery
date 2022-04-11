const { packagesList } = require("./INPUTS/packageInput");

const viewInputs = () => {
  packagesList.forEach((p) => {
    console.log(`${p.pkgId}\t${p.weight}\t${p.distance}\t${p.coupon}`);
  });
};

module.exports = viewInputs;
