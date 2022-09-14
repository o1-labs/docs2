import React from "react";

import styles from "./Button.module.scss";

type Color = "orange" | "teal" | "dark" | "custom";

interface Props {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color: Color;
  customStyles?: any;
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  color = "orange",
  customStyles,
}) => {
  let stylesColor = undefined;
  if (color === "orange") {
    stylesColor = styles.minaButtonOrange;
  } else if (color === "teal") {
    stylesColor = styles.minaButtonTeal;
  } else if (color === "dark") {
    stylesColor = styles.minaButtonDark;
  } else if (color === "custom") {
    stylesColor = customStyles;
  }

  return (
    <button type="button" className={stylesColor} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
