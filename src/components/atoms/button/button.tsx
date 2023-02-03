import { FC, HTMLProps } from 'react'
import './button.scss'
import classNames from 'classnames'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  width?: string
  disabled?: boolean
  variant?: 'primary' | 'secondary'
  //type?: 'button' | 'submit' | 'reset'
}

const Button: FC<ButtonProps> = ({ id, width, children, variant, disabled, type, ...props }) => {
  return (
    <button
      className={classNames('button', { 'button--secondary': variant === 'secondary' })}
      style={{ width }}
      disabled={disabled}
      //type={type}
      {...props}
    >
      {children}
    </button>
  )
}
export default Button
