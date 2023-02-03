import { render, screen } from '@testing-library/react'
import GiftCard from './gift-card'

describe('GiftCard component', () => {
  const deleteGift = jest.fn()
  const setStateModal=jest.fn()
  const gift = {
    id: 1,
    url: 'example.jpg',
    author_id: 18
  }
  it('should render with a gift', () => {
    render(<GiftCard gift={gift} deleteGift={deleteGift} stateModal setStateModal={setStateModal}/>)
    const GiftCardFound = screen.getByAltText('Close')
    expect(GiftCardFound).toBeDefined()
    //expect(screen.getByText(player.attack)).toBeVisible()
  })
})
