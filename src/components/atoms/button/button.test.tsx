import { render, screen, fireEvent } from '@testing-library/react'
import Button from './button'

describe('Button component tests', () => {
  it('should display the text sended', () => {
    render(<Button>Some Text</Button>)
    const buttonFound = screen.getByRole('button')
    expect(buttonFound).toHaveTextContent('Some Text')
  })

  it('should have a secondary class', () => {
    render(<Button variant="secondary">Some Text</Button>)
    const buttonFound = screen.getByRole('button')
    expect(buttonFound).toHaveClass('button--secondary')
  })
  it('should hace disabled atribute', () => {
    render(<Button disabled>Some Text</Button>)
    const buttonFound = screen.getByRole('button')
    expect(buttonFound).toHaveAttribute('disabled')
  })
  it('should trigger the click event', () => {
    const onClickObj = jest.fn();
    render(<Button onClick={() => onClickObj()} >Some Text</Button>)
    const buttonFound = screen.getByRole('button');
    fireEvent.click(buttonFound);
    expect(onClickObj).toBeCalled()
  })
})
