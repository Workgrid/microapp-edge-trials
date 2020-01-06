import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Summary from './pages/Summary'
import FeaturePolicyDetail from './pages/FeaturePolicyDetail'
import Tests from './pages/Tests'

const App = () => {
  return (
    <div className="workgrid">
      <Router basename={window.location.pathname}>
        <Route path="/" exact component={Summary} />
        <Route path="/featurepolicy" component={FeaturePolicyDetail} />
        <Route path="/tests" component={Tests} />
      </Router>
    </div>
  )
}

export default App
