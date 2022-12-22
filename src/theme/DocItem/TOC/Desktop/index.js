import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import TOC from '@theme/TOC';
import styles from './DocItemTOC.module.scss';
export default function DocItemTOCDesktop() {
  const { toc, frontMatter } = useDoc();
  return (
    <TOC
      toc={toc}
      minHeadingLevel={frontMatter.toc_min_heading_level}
      maxHeadingLevel={frontMatter.toc_max_heading_level}
      className={styles.tocDesktop}
    />
  );
}
