import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from './input'

describe('Input component', () => {
  const onChange = jest.fn()
  it('should render input by role', () => {
    render(<Input placeholder="Nombre" />)
    const inputFound = screen.getByRole('textbox')
    expect(inputFound).toBeInTheDocument()
  })

  it('should show message when have an error', () => {
    render(<Input messageError="This is an error" labelMessage="Nombre" />)
    const inputFound = screen.getByText('This is an error')
    expect(inputFound).toBeInTheDocument()
  })

  it('should have a class error when have one error', () => {
    render(<Input messageError="This is an error" labelMessage="Nombre" />)
    const inputFound = screen.getByRole('textbox')
    expect(inputFound).toHaveClass('input__box--error')
  })

  it('should call onChange', () => {
    
    render(<Input onChange={onChange} />)
    const input = screen.getByRole('textbox')
    expect(onChange).toBeCalledTimes(0)
    userEvent.type(input, 'test')
    expect(onChange).toBeCalledTimes(4)
  })

  it('should render based on props', () => {
    render(<Input onChange={onChange} placeholder="test" value="test" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'test')
    expect(screen.getByRole('textbox')).toHaveValue('test')
  })
  
})
