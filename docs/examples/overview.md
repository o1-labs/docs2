---
id: overview
title: Overview
---

This page is an example of how to add a new sidebar with an entry in the navigation bar.

## Files to change

1. **sidebars.js**

- To create a completely new side bar, add a new object to `module.exports` in `sidebars.js`. See the `examples` entry as an example.
- To add to an existing sidebar, add a new [Sidebar object](https://docusaurus.io/docs/sidebar#sidebar-object) to the sidebar you want to add too.

2. **docusaurus.config.js**

- To create a new navbar item, add a new item under the `themeConfig.navbar.items` property
