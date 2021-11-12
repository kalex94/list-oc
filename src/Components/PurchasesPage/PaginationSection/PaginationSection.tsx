import { paginationFilterType } from '../../../libaries/dataTypes'

interface propTypes {
  setPaginationFilters: Function,
  paginationFilter: paginationFilterType,
  itemsLength : number,
  maxValues: Array<string>
}

function PaginationSection (props: propTypes) {
  function showListValues () {
    return props.maxValues.map(value => {
      return  <option key={value} value={value}>{value + ' resultados por pagina'}</option>
    })
  }
  
  return (
    <div className='PurchasePage__paginationCont'>
      <button
        className='PurchasesPage__paginationButton'
        disabled={props.paginationFilter.FROM <= 0}
        onClick={() => props.setPaginationFilters({
          ...props.paginationFilter,
          FROM: props.paginationFilter.FROM - props.paginationFilter.MAX,
          TO: props.paginationFilter.TO - props.paginationFilter.MAX
        })}
      >
        {'<'}
      </button>
      <select
        className='PurchasesPage__paginationSelect'
        value={props.paginationFilter.MAX.toString()}
        onChange={e => {
          props.setPaginationFilters({
            ...props.paginationFilter,
            MAX: parseInt(e.target.value),
            FROM: 0,
            TO: parseInt(e.target.value)
          })
        }}
      >
        {showListValues()}
        <option value={(props.itemsLength + 1).toString()}>{'Máximos resultados por pagina'}</option>
      </select>
      <button
        className='PurchasesPage__paginationButton'
        disabled={props.paginationFilter.TO >= props.itemsLength}
        onClick={() => props.setPaginationFilters({
          ...props.paginationFilter,
          FROM: props.paginationFilter.FROM + props.paginationFilter.MAX,
          TO: props.paginationFilter.TO + props.paginationFilter.MAX
        })}
      >
        {'>'}
      </button>
    </div>
  )
}

export default PaginationSection
