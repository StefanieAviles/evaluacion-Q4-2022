import { FC } from 'react'
import classNames from 'classnames'
import './image.scss'
import { Gift } from '../../../utils/interfaces/interfaces'
import DeleteIcon from '../../../assets/delete-icon.svg'
import Button from '../button/button'
import { UserService } from '../../../services/user.service'

interface ImageProps {
  gift: Gift
  isDeleted?: boolean
  setIsDeleted: (arg:boolean) => void
  deleteGift: () => void
}

const Image: FC<ImageProps> = ({ gift, isDeleted, setIsDeleted, deleteGift }) => {
  const deleteTheGift = async() => {
    await UserService.deleteGift(gift).then ((response) => console.log('Gift eliminado'))
    setIsDeleted(false)
  }
  const openModal = () => {
    setIsDeleted(true)
  }
  const closeModal = () => {
    setIsDeleted(false)
  }
  return (
  <div className='image'>
      <section className="image__card">
      {isDeleted && (
      <section className="image__modal">
        <p>Deseas eliminar este gift?</p>
        <div className="image__modal__buttons-container">
          <Button onClick={deleteTheGift} disabled={false}>Eliminar</Button>
          <Button onClick={closeModal} disabled={false}>Cancelar</Button>
        </div>
        
      </section>
    )}
        <img className={classNames('image__container', { 'image__container--hide-image': isDeleted })} src={gift.url} alt="Close" />
        <img
              src={DeleteIcon}
              alt="close-icon"
              className="image__closeIcon"
              onClick={openModal}
            />
        
      </section>
  </div>
  )
}
export default Image
