import { FC, HTMLProps } from 'react'
import './input.scss'
import classNames from 'classnames'

interface InputProps extends HTMLProps<HTMLInputElement> {
  labelMessage?: string
  messageError?: string
  inputRef?: React.RefObject<HTMLInputElement>
}

const Input: FC<InputProps> = ({
  labelMessage,
  messageError,
  inputRef,
  ...props
}) => {
  return (
    <div className="input">
      {labelMessage && <label className="input__label">{labelMessage}</label>}
      <input
        className={classNames('input__box', {
          'input__box--error': messageError
        })}
        ref={inputRef}
        {...props}
      />
      {
        messageError && (
          <span className="input__error">{messageError}</span>
        )
      }
    </div>
  )
}
export default Input
