import { sortFilterType, inputDataType } from '../../libaries/dataTypes'

function sortValues (arr: Array<inputDataType>, sortCond: sortFilterType) {
  if (sortCond.SORT_BY) {  
    const n = arr.length
    for (let i = 0; i < n-1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if ((arr[j][sortCond.SORT_BY] > arr[j + 1][sortCond.SORT_BY]) === sortCond.SORT_DIR) {
          const temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
  }
}

export default sortValues