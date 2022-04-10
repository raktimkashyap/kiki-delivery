const io = require("../utility/userInput");
const packages = require("../delivery/package");
const coupons = require("../coupons/couponsCollection");
const calculate = require("./calculate");

const calculateDeliveryCost = () => {
  // TODO: Remove OR values
  const baseCost = Number(io("Enter base cost of delivery: ")) || 100;
  const pkgCount = Number(io("Enter total no. of packages: ")) || 5;

  //VIEW COUPONS
  coupons.viewAllDiscounts();

  const dummyPackages = [
    {
      pkgId: "PKG1",
      weight: 50,
      distance: 30,
      coupon: "OFR001",
    },
    {
      pkgId: "PKG2",
      weight: 75,
      distance: 125,
      coupon: "OFR001",
    },
    {
      pkgId: "PKG3",
      weight: 175,
      distance: 100,
      coupon: "OFR001",
    },
    {
      pkgId: "PKG4",
      weight: 110,
      distance: 60,
      coupon: "OFR001",
    },
    {
      pkgId: "PKG5",
      weight: 155,
      distance: 95,
      coupon: "OFR001",
    },
  ];

  // TODO: Uncomment this for final
  // for (let i = 0; i < pkgCount; i++) {
  //   console.log("Package No.", i + 1, " Details: ");
  //   console.log("--------------------------");
  //   const pkgId = io("Package Id: ");
  //   const weight = Number(io("Package Weight: "));
  //   const distance = Number(io("Delivery Distance: "));
  //   const coupon = io("Delivery Coupon Code: ");
  //   packages.addNewPackage({ baseCost, pkgId, weight, distance, coupon });
  // }

  // TODO: Remove this for final
  dummyPackages.forEach(({ pkgId, weight, distance, coupon }) =>
    packages.addNewPackage({ baseCost, pkgId, weight, distance, coupon })
  );

  console.log("\n");

  return packages.allPackages.map((pkg) => calculate(pkg, baseCost));
};

module.exports = calculateDeliveryCost;
