import axios from 'axios'
import {DB_URL, DB_KEY} from '../../config'

const setDBEntry = async (id: string) => {
  const options = {
    headers: {
      'cache-control': 'no-cache',
      'x-apikey': DB_KEY
    }
  }
  const entry = await axios.get(DB_URL, options)
  console.log(entry)
}

export default setDBEntry
