import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Preview from './modules/Preview'
import Detail from './modules/Detail'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/Detail" component={Detail}/>
    <Route path="/Detail/:image/:name/:email/:phone/:location" component={Detail}/>
  </Router>
), document.getElementById('app'))
