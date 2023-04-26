import React from 'react';

import styles from './Button.module.scss';

type Color = 'orange' | 'teal' | 'dark' | 'custom';

interface Props {
  children: React.ReactNode;
  color: Color;
  customStyles?: string;
  type: string;
}

export const Button: React.FC<Props> = (
  props: React.ComponentPropsWithoutRef<'button'> & Props
) => {
  const { color, customStyles, ...rest } = props;
  let stylesColor = undefined;
  if (color === 'orange') {
    stylesColor = styles.minaButtonOrange;
  } else if (color === 'teal') {
    stylesColor = styles.minaButtonTeal;
  } else if (color === 'dark') {
    stylesColor = styles.minaButtonDark;
  } else if (color === 'custom' && customStyles) {
    stylesColor = customStyles;
  }
  return (
    <button {...rest} className={stylesColor}>
      {props.children}
    </button>
  );
};

export default Button;
