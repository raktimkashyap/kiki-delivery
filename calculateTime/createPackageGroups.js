const {
  packageGroupCollection,
  PackageGroup,
} = require("../delivery/packageGroup");

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

module.exports = createPackageGroups;
