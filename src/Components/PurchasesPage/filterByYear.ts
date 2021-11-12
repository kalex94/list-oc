import { inputDataType } from '../../libaries/dataTypes'

function filterByYear (arr: Array<inputDataType>, year: string) {
  if (year !== '') {
    return arr.filter(row => row.fecha.split(' ')[0].split('-')[0] === year)
  }
  return arr
}

export default filterByYear
