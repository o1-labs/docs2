import React from "react";

import styles from "./Button.module.scss";
import ArrowRightSmall from "@site/static/img/common/arrow-right-small.svg";

type Color = "orange" | "teal" | "dark";

interface Props {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color: Color;
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  color = "orange",
}) => {
  let stylesColor = undefined;
  if (color === "orange") {
    stylesColor = styles.minaButtonOrange;
  } else if (color === "teal") {
    stylesColor = styles.minaButtonTeal;
  } else if (color === "dark") {
    stylesColor = styles.minaButtonDark;
  }

  return (
    <button className={stylesColor} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
