import { History } from 'history'
import './HomePage.css'
import buttons from './buttons.json'

interface propTypes{
  history: History
}

function Home (props: propTypes) {
  
  function showButtons () {
    return buttons.map(button => {
      return (
        <button
          className='HomePage__menuButton'
          onClick={() => props.history.push(button.ROUTE)}
        >
          <div className='HomePage__menuButtonHead'>{button.NAME}</div>
          <div
            className='HomePage__menuButtonBody'
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/icons/' + button.ICON})` }}
          />
        </button>
      )
    })
  }
  return (
    <div className='HomePage__mainCont'>
      <h1 className='HomePage__title'>Lista OC</h1>
      <nav className='HomePage__navMenu'>
        {showButtons()}
      </nav>
    </div>
  )
}

export default Home
