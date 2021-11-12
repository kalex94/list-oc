import { inputDataType, paginationFilterType } from '../../libaries/dataTypes';

function paginationFilter (arr: Array<inputDataType>, paginationFilter: paginationFilterType) {
  for (let i = 0; i < arr.length; i++) {
    if (i < paginationFilter.FROM || i > paginationFilter.TO) {
      arr.splice(i, 1)
    }
  }
}

export default paginationFilter
