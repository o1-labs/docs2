import React from 'react';
import Button from '@site/src/components/common/Button';
import styles from './EditButton.module.scss';
import ArrowRightSmall from '@site/static/svg/common/arrow_right_small.svg';
import { useLocation } from '@docusaurus/router';

export default function EditButton(): JSX.Element {
  const { pathname } = useLocation();
  const baseEditUrl = 'https://github.com/o1-labs/docs2/edit/main/docs';
  const editUrl = `${baseEditUrl}${pathname}.mdx`;

  return (
    <div style={{ color: 'white' }} className={styles.editButton}>
      <Button color="orange">
        Edit this page
        <ArrowRightSmall />
      </Button>
    </div>
  );
}
