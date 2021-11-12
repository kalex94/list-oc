import Axios from 'axios'
import { purchaseType } from '../../libaries/dataTypes'

function getPurchases () : Promise<Array<purchaseType>> {
  const url = 'https://test-backend.todoobras.com.ar/public/api/testCompras'
  let compras : Array<purchaseType> = []
  return Axios.get(url).then((res: any) => {
    try {
      compras = res.data.compras
    } catch (error) {
      console.log (error)
    }
    return compras
  }).catch(e => {
    return compras
  })
}

export default getPurchases
