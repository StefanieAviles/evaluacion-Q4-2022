import { FC, useState } from 'react'
import './gift-card.scss'
import Image from '../../atoms/image/image'
import { Gift } from '../../../utils/interfaces/interfaces'
interface GiftCardProps {
  gift: Gift
  deleteGift: () => void
  stateModal: boolean
  setStateModal: (arg:boolean) => void
}

const GiftCard: FC<GiftCardProps> = ({ gift, deleteGift, stateModal,setStateModal }) => {
  
  const [isDeleted, setIsDeleted] = useState(false)
  return (
    <section className="gift-card">
      <section className="gift-card__header">
        <Image gift={gift} isDeleted={isDeleted} setIsDeleted={setIsDeleted} deleteGift={deleteGift}></Image>
      </section>
    </section>
  )
}
export default GiftCard
