class Package {
  constructor({ baseCost, pkgId, weight, distance, coupon }) {
    this.baseCost = baseCost;
    this.pkgId = pkgId;
    this.weight = weight;
    this.distance = distance;
    this.coupon = coupon;
    this.deliveryTime = 0;
  }
}

class AllPackages {
  constructor() {
    if (AllPackages.instance == null) {
      this.allPackages = [];
      AllPackages.instance = this;
    }
    return AllPackages.instance;
  }

  addNewPackage({ baseCost, pkgId, weight, distance, coupon }) {
    const newPackage = new Package({
      baseCost,
      pkgId,
      weight,
      distance,
      coupon,
    });
    this.allPackages.push(newPackage);
  }
}

const packages = new AllPackages();
Object.freeze(packages);

module.exports = packages;
// module.exports = Package;
