import { FC, HTMLProps } from 'react'
import './input.scss'
import classNames from 'classnames'

interface InputProps extends HTMLProps<HTMLInputElement> {
  //showError?: boolean
  labelMessage?: string
  messageError?: string
  inputRef?: React.RefObject<HTMLInputElement>
}

const Input: FC<InputProps> = ({
  /* showError = false, */ labelMessage,
  messageError,
  inputRef,
  ...props
}) => {
  //const { handleChange, inputValue } = useInput(props)
  //const conditionError = showError && inputValue === ''
  return (
    <div className="input">
      {labelMessage && <label className="input__label">{labelMessage}</label>}
      <input
        className={classNames('input__box', {
          'input__box--error': /*conditionError*/ messageError
        })}
        //onChange={handleChange}
        ref={inputRef}
        {...props}
      />
      {
        /*conditionError*/ messageError && (
          <span className="input__error">{messageError}</span>
        )
      }
    </div>
  )
}
export default Input
