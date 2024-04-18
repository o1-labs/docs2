/**
 * Usage: node scripts/update-sidebars-o1js-api.js
 * This script will update the sidebars.js file with the latest o1js API. It will only modify the `o1js API Reference` category.
 */

const fs = require('fs');
const path = require('path');
const sidebars = require('../sidebars.js');

function buildDirectoryStructure(basePath, relativePath = '') {
  const fullPath = path.join(basePath, relativePath);
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });

  return entries
    .map((dirent) => {
      const entryPath = path.join(relativePath, dirent.name);
      if (dirent.isDirectory()) {
        return {
          type: 'category',
          label: dirent.name,
          items: buildDirectoryStructure(basePath, entryPath),
        };
      } else if (dirent.name.endsWith('.mdx')) {
        const fileName = dirent.name.replace('.mdx', '');
        return {
          type: 'doc',
          id: `zkapps/o1js-reference/${entryPath.replace('.mdx', '')}`,
          label: fileName,
        };
      }
    })
    .filter(Boolean); // Filter out undefined entries (e.g., non-markdown files)
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

function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

function renameCategories(items) {
  items.forEach((item) => {
    if (item.type === 'category') {
      item.label = capitalizeWords(item.label);
      renameCategories(item.items);
    }
  });
}

const { zkAppCategory, o1jsAPICategory } = findo1jsSidebar(sidebars);
const newAPISidebar = {
  type: 'category',
  label: 'o1js Reference',
  items: buildDirectoryStructure('./docs/zkapps/o1js-reference'),
};
renameCategories(newAPISidebar.items);
sidebars.docs[zkAppCategory].items[o1jsAPICategory] = newAPISidebar;

fs.writeFileSync(
  './sidebars.js',
  `module.exports = ${JSON.stringify(sidebars, null, 2)}`
);
