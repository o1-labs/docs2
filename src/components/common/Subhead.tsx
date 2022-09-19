import React from "react";

import styles from "./Subhead.module.scss";

interface Props {
  children: React.ReactNode;
}

export const Subhead: React.FC<Props> = ({ children }) => {
  return <p className={styles.minaSubhead}>{children}</p>;
};

export default Subhead;
