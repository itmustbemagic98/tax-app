import axios from 'axios'
import {DB_URL, DB_KEY} from '../../config'
import {IData} from '../../store/types'

const getDBEntry = async (actualizeStore: (data: ReadonlyArray<IData>) => void, id?: string) => {
  const options = {
    headers: {
      'cache-control': 'no-cache',
      'x-apikey': DB_KEY
    }
  }
  try {
    const entry: {data: any} = await axios.get(id ? DB_URL + `/${id}` : DB_URL, options)
    actualizeStore(entry.data)
  }
  catch (e) {
    console.log(e)
  }
}

export default getDBEntry
