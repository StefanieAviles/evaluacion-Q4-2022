import axios, { AxiosResponse } from 'axios'
import { Player, Option, Gift } from '../utils/interfaces/interfaces'
import gifts from '../utils/gifts.json'

const API_URL = process.env.REACT_APP_API_URL as string

export interface FirebaseWrapper<T> {
  data: T
}

export class UserService {


  static async getMyGifts() {
    /* const response: AxiosResponse<Player[]> = await axios.get(
      'https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/?author_id=18',
      {
        headers: {
          author_id: '18'
        }
      }
    )
    return response.data */
    const myArray: Gift[] = [
      {
        id: 1,
        url: 'https://media.tenor.com/VzvFB3Apq-8AAAAM/captain-america-avengers.gif',
        author_id: 18
      },
      {
        id: 2,
        url: 'https://media.tenor.com/aQ7JU8GcbJoAAAAM/the-avengers-marvel.gif',
        author_id: 18
      },
      {
        id: 3,
        url: 'https://media.tenor.com/mme2qVjaN8oAAAAM/avengers-endgame-marvel.gif',
        author_id: 18
      },
      {
        id: 4,
        url: 'https://media.tenor.com/AC9M9sJJQa8AAAAM/marvel-future-revolution-marvel-future-fight.gif',
        author_id: 18
      },
      {
        id: 5,
        url: 'https://media.tenor.com/32g9ZstNXGMAAAAM/avengers-endgame-captain-america.gif',
        author_id: 18
      },
      {
        id: 6,
        url: 'https://media.tenor.com/VzvFB3Apq-8AAAAM/captain-america-avengers.gif',
        author_id: 18
      }
    ]
    return myArray
  }
  static deleteGift = async(gift: Gift) =>{
    console.log('Gift eliminado')
    /* const response: AxiosResponse<Player[]> = await axios.delete(
      'https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/',
      {
        headers: {
          'id': gift.id,
          'url': gift.url,
          'author_id': 18
        }
      }
    )
    return response.data  */
  }
  static async createGift(gift: Gift) {
    const response = await axios.post('https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/', {
      headers: {
        url: gift.url,
        author_id: gift.author_id
      }
    })
    console.log(response.data)
    return response.data
  }
}
