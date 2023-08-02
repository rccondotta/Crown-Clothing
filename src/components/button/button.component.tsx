import { FC, ButtonHTMLAttributes, ComponentPropsWithRef, forwardRef } from 'react';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from './button.styles';

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
}

const getButton = (buttonType: BUTTON_TYPE_CLASSES = BUTTON_TYPE_CLASSES.base) => {
  const buttonComponents: Record<BUTTON_TYPE_CLASSES, FC<ComponentPropsWithRef<any>>> = {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  };

  return buttonComponents[buttonType];
};

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, buttonType, isLoading, ...otherProps }, ref) => {
    const CustomButton = getButton(buttonType);

    return (
      <CustomButton disabled={isLoading} {...otherProps} ref={ref}>
        {isLoading ? <ButtonSpinner /> : children}
      </CustomButton>
    );
  }
);

export default Button;
