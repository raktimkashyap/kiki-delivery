const io = require("../utility/userInput");
const calculateDeliveryCost = require("../calculateCost/calculateDeliveryCost");
const createPackageGroups = require("./createPackageGroups");
const vehicles = require("../delivery/vehicle");
const log = require("../utility/logger");

const calculateDeliveryTime = () => {
  const allPackages = calculateDeliveryCost().sort(
    (a, b) => b.weight - a.weight
  );
  console.log("\n");

  // TODO: Remove OR values
  const count = Number(io("Enter number of vehicles: ")) || 2;
  const maxSpeed = Number(io("Enter max vehicle speed: ")) || 70;
  const maxLoad = Number(io("Enter max vehicle load: ")) || 200;

  vehicles.addNewVehicles({ maxSpeed, maxLoad, count });

  let possiblePackages = createPackageGroups(allPackages, maxLoad);

  let i = 0;
  while (true) {
    if (possiblePackages.length === i) break;
    vehicles.allVehicles.forEach((v) => {
      possiblePackages[i].setPackageDeliveryTime(
        v.maxSpeed,
        v.nextDeliveryTime
      );
      v.setNextDeliveryTime(possiblePackages[i].getTotalDeliveryTime());
      i++;
    });

    vehicles.sortByDeliveryTime();
  }
  return possiblePackages;
};

module.exports = calculateDeliveryTime;
