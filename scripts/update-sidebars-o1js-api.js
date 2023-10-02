/**
 * Usage: node scripts/update-sidebars-o1js-api.js
 * This script will update the sidebars.js file with the latest o1js API. It will only modify the `o1js API Reference` category.
 */

const fs = require('fs');
const sidebars = require('../sidebars.js');

function getAllAPIPathnames(directory) {
  return fs
    .readdirSync(`./docs/zkapps/o1js-reference/${directory}`)
    .map((file) => {
      const fileName = file.replace('.md', '');
      return {
        type: 'doc',
        id: `zkapps/o1js-reference/${directory}/${fileName}`,
        label: `${fileName}`,
      };
    });
}

function findo1jsSidebar(sidebars) {
  // Find the index of the `zkApp Developers` category in the sidebars
  const zkAppCategory = sidebars.docs.findIndex(
    (item) => item.label === 'zkApp Developers'
  );

  // Find the index of the `o1js API Reference` category in the sidebars
  const o1jsAPICategory = sidebars.docs[zkAppCategory].items.findIndex(
    (item) => item.label === 'o1js Reference'
  );

  return {
    zkAppCategory,
    o1jsAPICategory,
  };
}

function reseto1jsSidebar(sidebars) {
  let { zkAppCategory, o1jsAPICategory: o1jsAPICategory } = findo1jsSidebar(sidebars);
  sidebars.docs[zkAppCategory].items[o1jsAPICategory] = emptySidebar();
  return sidebars;
}

function updateSidebars(sidebars, category, o1jsItems) {
  const { zkAppCategory, o1jsAPICategory: o1jsAPICategory } = findo1jsSidebar(sidebars);

  const categoryToFind = sidebars.docs[zkAppCategory].items[
    o1jsAPICategory
  ].items.findIndex((item) => {
    return item.label === category;
  });

  // Update the category with the new items
  sidebars.docs[zkAppCategory].items[o1jsAPICategory].items[
    categoryToFind
  ].items = o1jsItems;
}

function emptySidebar() {
  return {
    type: 'category',
    label: 'o1js Reference',
    items: [
      {
        type: 'doc',
        id: 'zkapps/o1js-reference/README',
        label: 'Introduction',
      },
      {
        type: 'doc',
        id: 'zkapps/o1js-reference/modules',
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

const o1jsClasses = getAllAPIPathnames('classes');
const o1jsInterfaces = getAllAPIPathnames('interfaces');
const o1jsModules = getAllAPIPathnames('modules');
const o1jsEnums = getAllAPIPathnames('enums');

const newSidebars = reseto1jsSidebar(sidebars);
updateSidebars(newSidebars, 'Classes', o1jsClasses);
updateSidebars(newSidebars, 'Interfaces', o1jsInterfaces);
updateSidebars(newSidebars, 'Modules', o1jsModules);
updateSidebars(newSidebars, 'Enums', o1jsEnums);

fs.writeFileSync(
  './sidebars.js',
  `module.exports = ${JSON.stringify(newSidebars, null, 2)}`
);
