import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Summary from './pages/Summary'
import FeaturePolicyDetail from './pages/FeaturePolicyDetail'

const App = () => {
  return (
    <div className="workgrid">
      <Router basename={window.location.pathname}>
        <Route path="/" exact component={Summary} />
        <Route path="/featurepolicy" component={FeaturePolicyDetail} />
      </Router>
    </div>
  )
}

export default App
