const io = require("./utility/userInput");
const Package = require("./deliveryPackage/package");
const coupons = require("./coupons/couponsCollection");

const isCouponValid = (coupon, distance, weight) => {
  return (
    coupon.minDistance <= distance &&
    coupon.maxDistance >= distance &&
    coupon.minWeight <= weight &&
    coupon.maxWeight >= weight
  );
};

const calculate = (package, baseCost) => {
  const cost = baseCost + package.weight * 10 + package.distance * 5;

  const coupon = coupons.getCouponDetails(package.coupon);
  const isValid =
    Boolean(coupon) && isCouponValid(coupon, package.distance, package.weight);

  const discount = !isValid ? 0 : coupon.calculateDiscount(cost);

  const totalCost = cost - discount;
  console.log(`${package.pkgId}    ${discount}     ${totalCost}`);
};

const calculateDeliveryCost = () => {
  console.clear();
  console.log("CALCULATE DELIVERY COST");
  console.log("-----------------------\n");

  const baseCost = Number(io("Enter base cost of delivery: "));
  const pkgCount = Number(io("Enter total no. of packages: "));

  //VIEW COUPONS
  coupons.viewAllDiscounts();

  const allPackages = [];

  for (let i = 0; i < pkgCount; i++) {
    console.log("\nPackage No.", i + 1, " Details: ");
    console.log("--------------------------");
    const pkgId = io("Package Id: ");
    const weight = Number(io("Package Weight: "));
    const distance = Number(io("Delivery Distance: "));
    const coupon = io("Delivery Coupon Code: ");

    const pkg = new Package({ baseCost, pkgId, weight, distance, coupon });
    allPackages.push(pkg);
  }

  console.log("\n");
  console.log("TOTAL DELIVERY COSTS:");
  console.log("-----------------------");
  console.log("ID     DISCOUNT   TOTAL");
  allPackages.forEach((pkg) => calculate(pkg, baseCost));
};

module.exports = calculateDeliveryCost;
