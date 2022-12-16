import { render, screen } from '@testing-library/react'
import Image from './image'

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
})
