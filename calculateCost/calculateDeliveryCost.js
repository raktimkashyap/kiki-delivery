const io = require("../utility/userInput");
const packages = require("../delivery/package");
const coupons = require("../coupons/couponsCollection");
const calculate = require("./calculate");
const { packagesList, baseCost } = require("../INPUTS/packageInput");

const calculateDeliveryCost = () => {
  // VIEW COUPON DISCOUNTS
  coupons.viewAllDiscounts();

  packagesList.forEach(({ pkgId, weight, distance, coupon }) =>
    packages.addNewPackage({ baseCost, pkgId, weight, distance, coupon })
  );

  console.log("\n");

  return packages.allPackages.map((pkg) => calculate(pkg, baseCost));
};

module.exports = calculateDeliveryCost;
