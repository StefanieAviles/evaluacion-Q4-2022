import { render, screen, fireEvent } from '@testing-library/react'
import Image from './image'
import userEvent from '@testing-library/user-event'


describe('Image component tests', () => {
  const gift = {
    id: 1,
    url: 'example.jpg',
    author_id: 18
  }
  const setIsDeleted = jest.fn()
  const deleteGift = jest.fn()
  it('should have an image__container class', () => {
    render(<Image gift={gift} isDeleted={false} setIsDeleted={setIsDeleted}deleteGift={deleteGift}/>)
    const imageFound = screen.getAllByRole('img')
    expect(imageFound[0]).toHaveClass('image__container')
  })
  it('should render the image when isDeleted is true ', () => {
    render(<Image gift={gift} isDeleted={true} setIsDeleted={setIsDeleted}deleteGift={deleteGift}/>)
    const buttonDelete = screen.getByText('Eliminar')
    const buttonCancel = screen.getByText('Cancelar')
    const text = screen.getByText('Deseas eliminar este gift?')
    expect (buttonDelete).toBeInTheDocument()
    expect (buttonCancel).toBeInTheDocument()
    expect (text).toBeInTheDocument()
  })

})
