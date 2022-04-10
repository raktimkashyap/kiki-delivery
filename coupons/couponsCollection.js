const Coupon = require("./coupon");
const couponsList = require("../INPUTS/couponsInput");

class CouponCollection {
  constructor() {
    if (CouponCollection.instance == null) {
      this.coupons = [];
      CouponCollection.instance = this;
    }
    return CouponCollection.instance;
  }

  addNewDiscount({
    couponCode,
    offerPercent,
    minWeight,
    maxWeight,
    minDistance,
    maxDistance,
  }) {
    const newCoupon = new Coupon({
      couponCode,
      discountPercentage,
      minWeight,
      maxWeight,
      minDistance,
      maxDistance,
    });
    this.coupons.push(newCoupon);
  }

  viewAllDiscounts() {
    console.log("\nAVAILABLE DISCOUNT COUPONS:\n");
    console.table("CODE\tOFF%\tKMs\tKGs");
    const coupons = this.coupons;
    for (let i = 0; i < coupons.length; i++) {
      console.log(
        `${coupons[i].couponCode}\t${coupons[i].discountPercentage}%\t${coupons[i].minDistance}-${coupons[i].maxDistance}\t${coupons[i].minWeight}-${coupons[i].maxWeight}`
      );
    }
  }

  isCouponValid(code) {
    return this.coupons.some((item) => item.couponCode === code);
  }

  getCouponDetails(code) {
    return this.coupons.find((item) => item.couponCode === code);
  }

  setInitialCoupons() {
    couponsList.forEach((coupon) => this.coupons.push(new Coupon(coupon)));
  }
}
const coupons = new CouponCollection();
coupons.setInitialCoupons();
Object.freeze(coupons);
module.exports = coupons;
