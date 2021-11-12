import { useEffect, useRef, useState } from 'react'
import PurchasesTable from './PurchasesTable/PurchasesTable'
import './PurchasesPage.css'
import PaginationSection from './PaginationSection/PaginationSection'
import FiltersSection from './FiltersSection/FiltersSection'
import { sortFilterType, inputDataType, paginationFilterType } from '../../libaries/dataTypes'
import getPurchases from './getPurchases'
import sortValues from './sortValues'
import filterByText from './filterByText'
import YearsSection from './YearsSection/YearsSection'
import filterByYear from './filterByYear'

function PurchasesPage () {
  const onMount = useRef(true)
  const [inputItems, setInputItems] = useState<Array<inputDataType>>([])
  const [filteredItems, setFilteredItems] = useState<Array<inputDataType>>([])

  const textFilterPrev = useRef('')

  const yearFilterPrev = useRef('')

  const [yearFilter, setYearFilter] = useState('')
  const [textFilter, setTextFilter] = useState('')
  const [loadState, setLoadState] = useState('CHARGING')

  const paginationFilterDefault = useRef({
    FROM: 0,
    TO: 20,
    MAX: 20
  })

  const [paginationFilter, setPaginationFilter] = useState<paginationFilterType>(paginationFilterDefault.current)

  const sortFilterDefault = useRef({
    SORT_BY: '',
    SORT_DIR: true
  })

  const sortFilterPrev = useRef(JSON.stringify(sortFilterDefault.current))
  const [sortFilter, setSortFilter] = useState<sortFilterType>(sortFilterDefault.current)

  const [keys, setKeys] = useState<Array<string>>([])
  const years = useRef(['2019', '2020', '2021'])

  useEffect(() => {
    if (onMount.current) {
      getPurchases().then(res => {
        try {
          setLoadState('LOADED')
          setKeys(Object.keys(res[0]))
          setInputItems(res)
        } catch {
          setLoadState('ERROR')
        }
      })
      onMount.current = false
    }

    let itemsTemp = inputItems

    if (textFilterPrev.current !== textFilter) {
      itemsTemp = filterByText(itemsTemp, textFilter)
      textFilterPrev.current = textFilter
    }

    if (yearFilterPrev.current !== yearFilter) {
      itemsTemp = filterByYear(itemsTemp, yearFilter)
      yearFilterPrev.current = yearFilter
    }

    const sortFilterStr = JSON.stringify(sortFilter)
    if (sortFilterPrev.current !== sortFilterStr) {
      sortValues(itemsTemp, sortFilter)
      sortFilterPrev.current = sortFilterStr
    }

    setFilteredItems(itemsTemp)
  }, [inputItems, sortFilter, textFilter, paginationFilter, yearFilter])

  return (
    <div className='PurchasePage__mainCont'>
      <div className='PurchasePage__purchasesSectionCont'>
        <h1 className='PurchasePage__purchasesSectionTitle'>Compras</h1>
        <div className='PurchasePage__bottomItems'>
          <span className='PurchasePage__registersItem'>
            {filteredItems.length + ' registros'}
          </span>
          <FiltersSection
            paginationFilters={paginationFilter}
            setPaginationFilters={setPaginationFilter}
            filters={sortFilter}
            setSortFilter={setSortFilter}
            textFilter={textFilter}
            setTextFilter={setTextFilter}
          />
          <PaginationSection
            setPaginationFilters={setPaginationFilter}
            paginationFilter={paginationFilter}
            itemsLength={filteredItems.length}
            maxValues={['20', '50', '100']}
          />
          <PurchasesTable
            keys={keys}
            items={filteredItems}
            paginationFilter={paginationFilter}
            textFilter={textFilter}
            sortFilter={sortFilter}
            setSortFilter={setSortFilter}
            loadState={loadState}
          />
          <YearsSection
            yearFilter={yearFilter}
            setYearFilter={setYearFilter}
            years={years.current}
          />
        </div>
      </div>
    </div>
  )
}

export default PurchasesPage
