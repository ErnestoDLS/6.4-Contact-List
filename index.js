import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Contacts from './modules/Contacts'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/contacts" component={Contacts}/>
  </Router>
), document.getElementById('app'))
