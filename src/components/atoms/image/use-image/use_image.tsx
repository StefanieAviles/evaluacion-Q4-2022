
import { UserService } from '../../../../services/user.service'
import { Gift } from '../../../../utils/interfaces/interfaces'

  const useImage= ( gift: Gift, isDeleted: boolean, setIsDeleted: (arg:boolean) => void, deleteGift: () => void ) => {
    
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
    return {
        deleteTheGift, openModal, closeModal
    }
}

export default useImage;