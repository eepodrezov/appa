import { PropsWithChildren } from 'react';

export interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({ children, ...rest }: PropsWithChildren<ButtonProps>) => {
  console.log('a');
  return <button {...rest}>{children}</button>;
};
