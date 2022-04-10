const twoDecimals = require("../utility/twoDecimal");

class PackageGroup {
  constructor() {
    this.packages = [];
  }

  addPackageToGroup(pkg) {
    this.packages.push(pkg);
  }

  getGroupWeight() {
    let weight = 0;
    this.packages.forEach((p) => (weight += p.weight));
    return weight;
  }

  setPackageDeliveryTime(maxSpeed, extraTime) {
    for (let i = 0; i < this.packages.length; i++) {
      let time = this.packages[i].distance / maxSpeed + extraTime;
      this.packages[i].deliveryTime = twoDecimals(time);
    }
  }

  getTotalDeliveryTime() {
    let deliveryTime = 0;
    for (let i = 0; i < this.packages.length; i++) {
      if (deliveryTime < this.packages[i].deliveryTime) {
        deliveryTime = this.packages[i].deliveryTime;
      }
    }

    return deliveryTime;
  }
}

class PackageGroupCollection {
  constructor() {
    this.collection = [];
  }

  addToCollection(group) {
    if (group.length === 0) return;
    this.collection.push(group);
  }
}

const packageGroupCollection = new PackageGroupCollection();
module.exports = { packageGroupCollection, PackageGroup };
