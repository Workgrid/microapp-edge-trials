import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Summary from './pages/Summary'
import Detail from './pages/Detail'

const App = () => {
  return (
    <Router basename={window.location.pathname}>
      <Route path="/" exact component={Summary} />
      <Route path="/detail" component={Detail} />
    </Router>
  )
}

export default App
