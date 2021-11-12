import { sortFilterType, paginationFilterType } from '../../../libaries/dataTypes'

interface propTypes{
  filters: sortFilterType,
  setSortFilter: Function,
  setTextFilter: Function,
  textFilter: string,
  setPaginationFilters: Function,
  paginationFilters: paginationFilterType
}

function FiltersSection (props: propTypes) {
  return (
    <div>
      <input
        placeholder='Buscar'
        className='PurchasesPage__textInputFilter'
        value={props.textFilter}
        onChange={e => {
          props.setSortFilter({ ...props.filters })
          props.setTextFilter(e.target.value)
          props.setPaginationFilters({
            ...props.paginationFilters,
            FROM: 0,
            TO: props.paginationFilters.MAX
          })
        }}
      />
    </div>
  )
}

export default FiltersSection
