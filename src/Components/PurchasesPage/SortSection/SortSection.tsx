import { sortFilterType } from '../../../libaries/dataTypes'

interface propTypes {
  filters: sortFilterType,
  setFilters: Function,
  keys: Array<string>
}

// false: ascending
// true: descending

function SortSection (props: propTypes) {
  function getClass (key: string) {
    let buttonClass = 'PurchasesPage__tableSortButton'
    if (props.filters.SORT_BY === key) {
      buttonClass += props.filters.SORT_DIR ? '-ascending' : '-descending'
    }
    return buttonClass
  }
  
  function showHeaders () {
    if (props.keys.length) {
      return props.keys.map((key, index) => {
        return (
          <button
            key={index}
            className={getClass(key)}
            onClick={() => {
              props.setFilters({
                SORT_BY: key,
                SORT_DIR: props.filters.SORT_BY === key ? !props.filters.SORT_DIR : false
              })
            }}
          >
            {key}
          </button>
        )
      })
    }
  }
  
  return (
    <div className='PurchasePage__purchasesListHeader'>
      {showHeaders()}
    </div>
  )
}

export default SortSection
