const io = require("./utility/userInput");
const calculateDeliveryTime = require("./calculateDeliveryTime");
const calculateDeliveryCost = require("./calculateDeliveryCost");

function main() {
  console.clear();
  console.log("SELECT AN OPTION");
  console.log("----------------\n");
  console.log("1. CALCULATE DELIVERY COST");
  console.log("1. CALCULATE DELIVERY TIME");

  const x = io("\nENTER OPTION: ");

  console.log("\n");

  switch (x) {
    case "1":
      calculateDeliveryCost();
      break;
    case "2":
      calculateDeliveryTime();
      break;
    default:
      console.log("INVALID OPTION");
      break;
  }
}

main();
