class Package {
  constructor({ baseCost, pkgId, weight, distance, coupon }) {
    this.baseCost = baseCost;
    this.pkgId = pkgId;
    this.weight = weight;
    this.distance = distance;
    this.coupon = coupon;
  }
}

module.exports = Package;
