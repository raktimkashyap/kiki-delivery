class Coupon {
  constructor({
    couponCode,
    discountPercentage,
    minWeight,
    maxWeight,
    minDistance,
    maxDistance,
  }) {
    this.couponCode = couponCode;
    this.discountPercentage = discountPercentage;
    this.minWeight = minWeight;
    this.maxWeight = maxWeight;
    this.minDistance = minDistance;
    this.maxDistance = maxDistance;
  }

  calculateDiscount(cost) {
    return cost * (this.discountPercentage / 100);
  }
}

module.exports = Coupon;
