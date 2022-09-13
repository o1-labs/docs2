import React from "react";
import { useBackToTopButton } from "@docusaurus/theme-common/internal";
import Button from "@site/src/components/common/Button";

import ArrowUpMedium from "@site/static/svg/common/arrow_up_medium.svg";
import styles from "./BackToTopButton.module.scss";

export default function BackToTopButton(): JSX.Element {
  const { _shown, scrollToTop } = useBackToTopButton({ threshold: 300 });
  return (
    <div className={styles.backToTopButtonContainer}>
      <Button
        onClick={scrollToTop}
        color="custom"
        customStyles={styles.minaBackToTopButton}
      >
        <div className={styles.backToTopInnerContainer}>
          <ArrowUpMedium />
          <span>Top</span>
        </div>
      </Button>
    </div>
  );
}
