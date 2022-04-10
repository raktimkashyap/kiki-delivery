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
      console.log("-----------------------");
      console.table("ID     DISCOUNT      TOTAL");
      allPackagesCost.map((pkg) =>
        console.log(`${pkg.pkgId}   ${pkg.discount}        ${pkg.totalCost}`)
      );
      break;
    case "2":
      console.clear();
      console.log("CALCULATE DELIVERY TIME");
      console.log("-----------------------\n");
      calculateDeliveryTime();
      break;
    default:
      console.log("INVALID OPTION");
      break;
  }
}

main();
