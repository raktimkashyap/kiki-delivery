const {
  packageGroupCollection,
  PackageGroup,
} = require("../delivery/packageGroup");
const log = require("../utility/logger");

const createPackageGroups = (packages, maxLoad) => {
  for (let i = 0; i < packages.length; i++) {
    let pkgGroup = new PackageGroup();
    let collection = packageGroupCollection.collection;

    if (collection.flat().some((pkg) => pkg.packages.includes(packages[i]))) {
      continue;
    }
    pkgGroup.addPackageToGroup(packages[i]);

    for (let j = i; j < packages.length; j++) {
      if (i == j) continue;

      if (packages[j].weight + pkgGroup.getGroupWeight() <= maxLoad) {
        pkgGroup.addPackageToGroup(packages[j]);
      }
    }
    packageGroupCollection.addToCollection(pkgGroup);
  }

  return packageGroupCollection.collection.sort(
    (a, b) => b.getGroupWeight() - a.getGroupWeight()
  );
};

// function createPackageGroups() {
//   let maxLoad = 200;
//   const packages = allPackages.sort((a, b) => b.weight - a.weight);
//   let collection = new GroupCollection();

//   for (let i = 0; i < packages.length; i++) {
//     let pkgGroup = new PackageGroup();
//     if (
//       collection.collection
//         .flat()
//         .find((pkg) => pkg.pkgId === packages[i].pkgId)
//     )
//       continue;
//     pkgGroup.addToGroup(packages[i]);

//     for (let j = i; j < packages.length; j++) {
//       if (i == j) continue;

//       if (packages[j].weight + pkgGroup.getGroupWeight() <= 200) {
//         pkgGroup.addToGroup(packages[j]);
//       }
//     }

//     collection.addToCollection(pkgGroup.group);
//   }
//   log(collection.collection);
// }

module.exports = createPackageGroups;
