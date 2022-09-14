/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import styles from "./DesignpageFeatures.module.scss";

export default function DesignpageFeatures(): JSX.Element {
  return (
    <div className={styles.designPageContainer}>
      <div className={styles.columnContainer}>
        <h1 className={styles.h1Jumbo}>H1 Jumbo</h1>
        <h1 className={styles.minaH1}>H1</h1>
        <h2 className={styles.minaH2}>H2</h2>
        <h3 className={styles.minaH3}>H3</h3>
        <h4 className={styles.minaH4}>H4 (Mono All Caps)</h4>
        <h5 className={styles.minaH5}>H5</h5>
        <h6 className={styles.minaH6}>H6</h6>
        <div className={styles.minaPageLabel}>Page Label</div>
        <div className={styles.minaLabel}>Label</div>
        <div className={styles.minaButtonLabel}>Button Label</div>
        <div className={styles.minaButtonLink}>Button Link</div>
        <div className={styles.minaLink}>Link</div>
        <div className={styles.minaNavLink}>Nav Link</div>
        <div className={styles.minaSideBarLink}>Sidebar / Footer Link</div>
        <div className={styles.minaTooltip}>Tooltip text</div>
        <div className={styles.minaCredit}>Credit Name</div>
        <div className={styles.minaAnnouncement}>Announcement Text</div>
      </div>
      <div className={styles.columnContainer}>
        <div className={styles.minaPageSubhead}>
          Page Subhead / Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod temporus incididunt ut labore et dolore.
        </div>
        <div className={styles.minaSectionSubhead}>
          Section Subhead / Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod temporus incididunt ut labore et.
        </div>
        <div className={styles.minaParagraph}>
          Paragraph (Grotesk) / Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
        <div className={styles.minaParagraphSmall}>
          Paragraph Small (Grotesk) / Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
        <div className={styles.minaParagraphMono}>
          Paragraph (Mono) / Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmodorus temporus incididunt ut labore et dolore.
        </div>
        <div className={styles.minaQuote}>
          Quote / Lorem ipsum dolor sit amet, consectetur amet adipiscing elit,
          sed do eiusmod tempor.
        </div>
      </div>
    </div>
  );
}
