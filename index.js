const io = require("./utility/userInput");
const calculateDeliveryTime = require("./calculateTime/calculateDeliveryTime");
const calculateDeliveryCost = require("./calculateCost/calculateDeliveryCost");

function main() {
  console.clear();
  console.log("SELECT AN OPTION");
  console.log("----------------\n");
  console.log("1. CALCULATE DELIVERY COST");
  console.log("2. CALCULATE DELIVERY TIME");
  console.log("\n");

  const x = io("ENTER OPTION: ");

  console.log("\n");

  switch (x) {
    case "1":
      console.clear();
      console.log("CALCULATE DELIVERY COST");
      console.log("-----------------------\n");
      const allPackagesCost = calculateDeliveryCost();
      console.log("TOTAL DELIVERY COSTS:");

      console.table("ID\t\tDISCOUNT\tTOTAL");
      allPackagesCost.map((pkg) =>
        console.log(`${pkg.pkgId}\t\t${pkg.discount}\t\t${pkg.totalCost}`)
      );
      break;
    case "2":
      console.clear();
      console.log("CALCULATE DELIVERY TIME");

      const allPackagesTime = calculateDeliveryTime();
      console.log("ESTIMATED DELIVERY TIME:");

      console.table("ID\t\tDISCOUNT\tTOTAL\t\tTIME");
      allPackagesTime.map((pkg) => {
        console.log(
          `${pkg.pkgId}\t\t${pkg.discount}\t\t${pkg.totalCost}\t\t${pkg.deliveryTime}`
        );
      });
      break;
    default:
      console.log("INVALID OPTION");
      break;
  }
}

main();
