import React from 'react';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import TOC from '@theme/TOC';
import Button from '@site/src/components/common/Button';

export default function DocItemTOCDesktop() {
  const { toc, frontMatter } = useDoc();
  return (
    <>
      <Button color="orange">Edit this page</Button>
      <TOC
        toc={toc}
        minHeadingLevel={frontMatter.toc_min_heading_level}
        maxHeadingLevel={frontMatter.toc_max_heading_level}
        className={ThemeClassNames.docs.docTocDesktop}
      />
    </>
  );
}
