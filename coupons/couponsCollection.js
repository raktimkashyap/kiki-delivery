const Coupon = require("./coupon");

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
    console.log("\nAVAILABLE DISCOUNT COUPONS:");
    console.log("-----------------------------");
    console.table("CODE      OFF%      KMs        KGs");
    const coupons = this.coupons;
    for (let i = 0; i < coupons.length; i++) {
      console.table(
        `${coupons[i].couponCode}    ${coupons[i].discountPercentage}%     ${coupons[i].minDistance}-${coupons[i].maxDistance}     ${coupons[i].minWeight}-${coupons[i].maxWeight}`
      );
    }
    console.log("\n");
  }

  isCouponValid(code) {
    return this.coupons.some((item) => item.couponCode === code);
  }

  getCouponDetails(code) {
    return this.coupons.find((item) => item.couponCode === code);
  }

  setInitialCoupons() {
    this.coupons.push(
      new Coupon({
        couponCode: "OFR001",
        discountPercentage: 10,
        minWeight: 70,
        maxWeight: 200,
        minDistance: 0,
        maxDistance: 200,
      })
    );
    this.coupons.push(
      new Coupon({
        couponCode: "OFR002",
        discountPercentage: 7,
        minWeight: 100,
        maxWeight: 250,
        minDistance: 50,
        maxDistance: 150,
      })
    );
    this.coupons.push(
      new Coupon({
        couponCode: "OFR003",
        discountPercentage: 5,
        minWeight: 10,
        maxWeight: 150,
        minDistance: 50,
        maxDistance: 250,
      })
    );
  }
}
const coupons = new CouponCollection();
coupons.setInitialCoupons();
Object.freeze(coupons);
module.exports = coupons;
