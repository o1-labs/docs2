/**
 * Usage: node scripts/update-sidebars-snarkyjs-api.js
 * This script will update the sidebars.js file with the latest SnarkyJS API. It will only modify the `SnarkyJS API Reference` category.
 */

const fs = require('fs');
const sidebars = require('../sidebars.js');

function getAllSnarkyJSAPIPathnames(directory) {
  return fs
    .readdirSync(`./docs/zkapps/snarkyjs-reference/${directory}`)
    .map((file) => {
      const fileName = file.replace('.md', '');
      return {
        type: 'doc',
        id: `zkapps/snarkyjs-reference/${directory}/${fileName}`,
        label: `${fileName}`,
      };
    });
}

function findSnarkyjsSidebar(sidebars) {
  // Find the index of the `zkApp Developers` category in the sidebars
  const zkAppCategory = sidebars.docs.findIndex(
    (item) => item.label === 'zkApp Developers'
  );

  // Find the index of the `SnarkyJS API Reference` category in the sidebars
  const snarkyJSAPICategory = sidebars.docs[zkAppCategory].items.findIndex(
    (item) => item.label === 'SnarkyJS Reference'
  );

  return {
    zkAppCategory,
    snarkyJSAPICategory,
  };
}

function resetSnarkyjsSidebar(sidebars) {
  let { zkAppCategory, snarkyJSAPICategory } = findSnarkyjsSidebar(sidebars);
  sidebars.docs[zkAppCategory].items[snarkyJSAPICategory] = emptySidebar();
  return sidebars;
}

function updateSidebars(sidebars, category, snarkyJSItems) {
  const { zkAppCategory, snarkyJSAPICategory } = findSnarkyjsSidebar(sidebars);

  const categoryToFind = sidebars.docs[zkAppCategory].items[
    snarkyJSAPICategory
  ].items.findIndex((item) => {
    return item.label === category;
  });

  // Update the category with the new items
  sidebars.docs[zkAppCategory].items[snarkyJSAPICategory].items[
    categoryToFind
  ].items = snarkyJSItems;

  console.log(
    category,
    categoryToFind,
    sidebars.docs[zkAppCategory].items[snarkyJSAPICategory].items[
      categoryToFind
    ]
  );
}

function emptySidebar() {
  return {
    type: 'category',
    label: 'SnarkyJS Reference',
    items: [
      {
        type: 'doc',
        id: 'zkapps/snarkyjs-reference/README',
        label: 'Introduction',
      },
      {
        type: 'doc',
        id: 'zkapps/snarkyjs-reference/modules',
        label: 'Overview',
      },
      {
        type: 'category',
        label: 'Classes',
        items: [],
      },
      {
        type: 'category',
        label: 'Interfaces',
        items: [],
      },
      {
        type: 'category',
        label: 'Modules',
        items: [],
      },
      {
        type: 'category',
        label: 'Enums',
        items: [],
      },
    ],
  };
}

const snarkyjsClasses = getAllSnarkyJSAPIPathnames('classes');
const snarkyjsInterfaces = getAllSnarkyJSAPIPathnames('interfaces');
const snarkyjsModules = getAllSnarkyJSAPIPathnames('modules');
const snarkyjsEnums = getAllSnarkyJSAPIPathnames('enums');

const newSidebars = resetSnarkyjsSidebar(sidebars);
updateSidebars(newSidebars, 'Classes', snarkyjsClasses);
updateSidebars(sidebars, 'Interfaces', snarkyjsInterfaces);
updateSidebars(sidebars, 'Modules', snarkyjsModules);
updateSidebars(sidebars, 'Enums', snarkyjsEnums);

fs.writeFileSync(
  './sidebars.js',
  `module.exports = ${JSON.stringify(newSidebars, null, 2)}`
);
