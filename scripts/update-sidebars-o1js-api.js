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

function renameCategories(items) {
  items.forEach((item) => {
    if (item.type === 'category') {
      item.label = item.label.replace(/\b\w/g, (char) => char.toUpperCase());
      renameCategories(item.items);
    }
  });
}

function renameReadme(items) {
  const overviewIndex = items.findIndex((item) => item.label === 'README');
  if (overviewIndex !== -1) {
    items[overviewIndex].label = 'Introduction';
  }
}

function addSEODataToReadme(readmePath) {
  const fileContents = fs.readFileSync(readmePath, 'utf8');
  const seoData = `---
title: o1js API Reference
keywords:
  - o1js
  - API
  - Reference
---\n\n`;
  fs.writeFileSync(readmePath, seoData + fileContents);
}

const { zkAppCategory, o1jsAPICategory } = findo1jsSidebar(sidebars);
const newAPISidebar = {
  type: 'category',
  label: 'o1js Reference',
  items: buildDirectoryStructure('./docs/zkapps/o1js-reference'),
};
renameCategories(newAPISidebar.items);
renameReadme(newAPISidebar.items);
addSEODataToReadme('./docs/zkapps/o1js-reference/README.mdx');
sidebars.docs[zkAppCategory].items[o1jsAPICategory] = newAPISidebar;

fs.writeFileSync(
  './sidebars.js',
  `module.exports = ${JSON.stringify(sidebars, null, 2)}`
);
