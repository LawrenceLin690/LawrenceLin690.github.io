import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Home} from './components'

const Routes = () => {
  return (
    <div className="ui fluid container">
      <Switch>
        <Route component={Home} />
      </Switch>
    </div>
  )
}

export default Routes
