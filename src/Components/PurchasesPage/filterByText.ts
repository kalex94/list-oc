import { inputDataType } from '../../libaries/dataTypes'

function filterByText (arr: Array<inputDataType>, text: string) {
  if (text !== '') {
    return arr.filter(row => Object.values(row).findIndex(val => val ? val.toString().toLowerCase().includes(text.toLowerCase()) : false) > -1)
  }
  return arr
}

export default filterByText
