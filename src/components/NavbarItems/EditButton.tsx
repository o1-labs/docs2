import React from 'react';
import Button from '@site/src/components/common/Button';
import styles from './EditButton.module.scss';
import ArrowRightSmall from '@site/static/svg/common/arrow_right_small.svg';

export default function EditButton(): JSX.Element {
  return (
    <div style={{ color: 'white' }} className={styles.editButton}>
      <Button color="orange">
        Edit this page
        <ArrowRightSmall />
      </Button>
    </div>
  );
}
