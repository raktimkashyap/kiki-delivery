const twoDecimals = require("../utility/twoDecimal");

class Vehicle {
  constructor({ id, maxSpeed, maxLoad }) {
    this.id = id;
    this.maxSpeed = maxSpeed;
    this.maxLoad = maxLoad;
    this.nextDeliveryTime = 0;
  }

  setNextDeliveryTime(totalDeliveryTime) {
    const time = twoDecimals(2 * totalDeliveryTime);
    this.nextDeliveryTime = time;
  }
}

class VehicleFleet {
  constructor() {
    this.allVehicles = [];
  }
  addNewVehicles({ maxSpeed, maxLoad, count }) {
    for (let i = 0; i < count; i++) {
      const newVehicle = new Vehicle({ id: i + 1, maxSpeed, maxLoad });
      this.allVehicles.push(newVehicle);
    }
  }
  sortByDeliveryTime() {
    this.allVehicles.sort((a, b) => a.nextDeliveryTime - b.nextDeliveryTime);
  }
}

const vehicles = new VehicleFleet();
module.exports = vehicles;
