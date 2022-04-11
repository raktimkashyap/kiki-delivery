const calculateDeliveryCost = require("../calculateCost/calculateDeliveryCost");
const createPackageGroups = require("./createPackageGroups");
const vehicles = require("../delivery/vehicle");

const { maxLoad, maxSpeed, count } = require("../INPUTS/vehicleInputs");

const calculateDeliveryTime = () => {
  const allPackages = calculateDeliveryCost().sort(
    (a, b) => b.weight - a.weight
  );
  console.log("\n");

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
  let package = possiblePackages.flat();
  let finalPackages = [];
  package.forEach((p) => finalPackages.push(...p.packages));
  return finalPackages.sort((a, b) => a.pkgId.localeCompare(b.pkgId));
};

module.exports = calculateDeliveryTime;
