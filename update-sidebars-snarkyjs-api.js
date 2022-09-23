/**
 * Usage: node update-sidebars-snarkyjs-api.js
 * This script will update the sidebars.js file with the latest SnarkyJS API. It will only modify the `SnarkyJS API Reference` category.
 */

const fs = require("fs");
const sidebars = require("./sidebars.js");

function getAllSnarkyJSAPIPathnames(directory) {
  return fs
    .readdirSync(`./docs/zkapps/snarkyjs-reference/${directory}`)
    .map((file) => {
      const fileName = file.replace(".md", "");
      return {
        type: "doc",
        id: `zkapps/snarkyjs-reference/${directory}/${fileName}`,
        label: `${fileName}`,
      };
    });
}

function updateSidebars(sidebars, category, snarkyJSItems) {
  let { ...newSidebars } = sidebars;

  // Find the index of the `zkApp Developers` category in the sidebars
  const zkAppCategory = newSidebars.docs.findIndex(
    (item) => item.label === "zkApp Developers"
  );

  // Find the index of the `SnarkyJS API Reference` category in the sidebars
  const snarkyJSAPICategory = newSidebars.docs[zkAppCategory].items.findIndex(
    (item) => item.label === "SnarkyJS API Reference"
  );

  // Find the index of the category we want to update in the sidebars
  const categoryToFind = newSidebars.docs[zkAppCategory].items[
    snarkyJSAPICategory
  ].items.findIndex((item) => {
    return item.label === category;
  });

  // Update the category with the new items
  newSidebars.docs[zkAppCategory].items[snarkyJSAPICategory].items[
    categoryToFind
  ].items = snarkyJSItems;

  return newSidebars;
}

// Import all the "classes" from the SnarkyJS API Reference
const snarkyjsClasses = getAllSnarkyJSAPIPathnames("classes");
// Import all the "interfaces" from the SnarkyJS API Reference
const snarkyjsInterfaces = getAllSnarkyJSAPIPathnames("interfaces");
// Import all the "modules" from the SnarkyJS API Reference
const snarkyjsModules = getAllSnarkyJSAPIPathnames("modules");

let newSidebars = updateSidebars(sidebars, "Classes", snarkyjsClasses);
newSidebars = updateSidebars(sidebars, "Interfaces", snarkyjsInterfaces);
newSidebars = updateSidebars(sidebars, "Modules", snarkyjsModules);

fs.writeFileSync(
  "./sidebars.js",
  `module.exports = ${JSON.stringify(newSidebars, null, 2)}`
);
