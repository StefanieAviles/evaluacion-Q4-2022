import Input from '../../atoms/input/input'
import Button from '../../atoms/button/button'
import { FC, useState, useEffect} from 'react'
import './search-bar.scss'
import { UserService } from '../../../services/user.service'
import { Gift } from '../../../utils/interfaces/interfaces'

interface SearchBarProps {
  setSearchValue: (value: string) => void
  setStateModal: (value: boolean) => void
  setEdit: (value: boolean) => void
}
const SearchBar: FC<SearchBarProps> = (props: SearchBarProps) => {
  const [ url, setUrl ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ gift, setGift ] = useState<Gift>({
    id: 0,
    url: '',
    author_id: 18
  })
  useEffect(() => {setUrl('')},[])
  const newGift = async () =>{
      setGift({
        id: Math.floor(Math.random() * (1000 - 1) + 1),
        url: url,
        author_id: 18
      })
      await UserService.createGift(gift).then ((response) => console.log('Gift creado'))
    .catch ((error)=> setErrorMessage('URL no válida'))
  }
  return (
    <section className="search">
      <div className="search__input">
        <Input
          placeholder="Gift URL"
          name={url}
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            setUrl(event.currentTarget.value)
          }
          type="text"
          messageError={errorMessage}
        ></Input>
      </div>
      <div className="search__button-container">
        <Button onClick={newGift} disabled={false}>
          Agregar
        </Button>
      </div>
    </section>
  )
}
export default SearchBar

