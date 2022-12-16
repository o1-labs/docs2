import React from 'react';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import TOC from '@theme/TOC';
import Button from '@site/src/components/common/Button';
import ArrowRightSmall from '@site/static/svg/common/arrow_right_small.svg';

export default function DocItemTOCDesktop() {
  const { toc, frontMatter, metadata } = useDoc();
  const { editUrl } = metadata;

  return (
    <TOC
      toc={toc}
      minHeadingLevel={frontMatter.toc_min_heading_level}
      maxHeadingLevel={frontMatter.toc_max_heading_level}
      className={ThemeClassNames.docs.docTocDesktop}
    />
  );
}
