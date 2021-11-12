import { useEffect, useRef } from 'react'
import { sortFilterType, inputDataType, paginationFilterType } from "../../../libaries/dataTypes"
import SortSection from "../SortSection/SortSection"

interface propTypes{
  items: Array<inputDataType>,
  textFilter: string,
  paginationFilter: paginationFilterType,
  sortFilter: sortFilterType,
  setSortFilter: Function,
  loadState: string,
  keys: Array<string>
}

// cod_proveedor: number,
// created_at: string,
// deleted_at: string,
// difcosto: number,
// empresa: string,
// factura: string,
// fecha: string,
// idCompra: number,
// montopago: number,
// pagada: number,
// saldo: number,
// status: number,
// tipofactura: string,
// total: number,
// updated_at: string,
// userId: number,

function PurchasesTable(props: propTypes) {
  const tabla = useRef<Array<inputDataType>>([])

  useEffect(() => {
    tabla.current = props.items
  }, [props.items])

  function showCells (row:inputDataType) {
    return Object.values(row).map((value, index_j) => {
      let res = value

      if (typeof res === 'string') {
        try {
          const splitted = res.split('T')
          if (splitted.length === 2) {
            const date = splitted[0].split('-')
            // const time = splitted[1].split(':')
  
            res = date[2] + '/' + date[1] + '/' + date[0]
          }
        } catch {}
        try {
          const splitted = res.split(' ')
          if (splitted.length === 2) {
            const date = splitted[0].split('-')
            // const time = splitted[0].split('-')
            res = date[2] + '/' + date[1] + '/' + date[0]
          }
        } catch {}
      }
      
      if (props.textFilter) {
        const regex = new RegExp(props.textFilter, 'gi')
        const text = res?.toString().replace(/(<mark class="highlight">|<\/mark>)/gim, '')
        res = text?.replace(regex, '<mark class="highlight">$&</mark>')
      }

      return (
        <div key={index_j} dangerouslySetInnerHTML={{ __html: res }} />
      )
    })
  }

  function showItems () {
    if (props.items.length) {
      return props.items.map((row, index) => {
        if (index >= props.paginationFilter.FROM && index <= props.paginationFilter.TO) {
          return (
            <div key={index} className='PurchasePage__purchasesListRow'>
              {showCells(row)}
            </div>
          )
        } else {
          return null
        }
      })
    } else {
      switch (props.loadState) {
        case 'CHARGING':
          return (
            <div className='index__loaderCont'>
              <div className='index__loaderCircle' />
            </div>
          )
        case 'LOADED':
          return (
            <div className='PurchasesPage__listNoItemsMessage'>
              <p>La tabla no posee registros</p>
            </div>
          )
        default:
          return (
            <div className='PurchasesPage__listNoItemsMessage'>
              <p>Error al cargar los registros</p>
            </div>
          )
      }
    }
  }
  
  return (
    <div className='PurchasePage__purchasesListCont'>
      <SortSection filters={props.sortFilter} keys={props.keys} setFilters={props.setSortFilter} />
      {showItems()}
    </div>
  )
}

export default PurchasesTable
