import { PropsWithChildren } from "react"

export interface ButtonProps {
    onClick: () => void,
    disabled?: boolean
}

export const Button = ({children, ...rest}: PropsWithChildren<ButtonProps>) => {
  return (
    <button {...rest}>{children}</button>
  )
}
