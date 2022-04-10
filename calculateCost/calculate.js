const coupons = require("../coupons/couponsCollection");

// Check for Coupon validity
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
  const bill = {
    pkgId: package.pkgId,
    discount: discount,
    totalCost: totalCost,
    distance: package.distance,
    weight: package.weight,
    coupon: package.coupon,
  };
  // console.log(`${package.pkgId}    ${discount}     ${totalCost}`);

  return bill;
};

module.exports = calculate;
