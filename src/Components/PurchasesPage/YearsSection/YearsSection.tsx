interface propTypes {
  years: Array<string>,
  yearFilter: string,
  setYearFilter: Function
}

function YearsSection (props: propTypes) {
  function showYearButtons () {
    return props.years.map((year, index) => {
      return (
        <button
          className='PurchasesPage__yearsSectionItem'
          style={{ backgroundColor: props.yearFilter === year ? 'var(--color-5)' : 'transparent' }}
          onClick={() => props.setYearFilter(year)}
          key={index}
        >
          {year}
        </button>
      )
    })
  }
  
  return (
    <div className='PurchasesPage__yearsSectionCont'>
      <button
          className='PurchasesPage__yearsSectionItem'
          style={{ backgroundColor: props.yearFilter === '' ? 'var(--color-5)' : 'transparent' }}
          onClick={() => props.setYearFilter('')}
        >
          -
        </button>
      {showYearButtons()}
    </div>
  )
}

export default YearsSection
