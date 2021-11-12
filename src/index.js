import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Switch } from 'react-router'
import './index.css'

const PurchasesPage = React.lazy(() => import('./Components/PurchasesPage/PurchasesPage'))
const HomePage = React.lazy(() => import('./Components/HomePage/HomePage'))

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div>Cargando</div>}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/compras' component={PurchasesPage} />
        <Redirect to='/' />
      </Switch>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
)
