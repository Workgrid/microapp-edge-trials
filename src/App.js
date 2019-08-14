import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Summary from './pages/Summary'
import IFrameDetail from './pages/IFrameDetail'
import FeaturePolicyDetail from './pages/FeaturePolicyDetail'

const App = () => {
  return (
    <Router basename={window.location.pathname}>
      <Route path="/" exact component={Summary} />
      <Route path="/iframe" component={IFrameDetail} />
      <Route path="/featurepolicy" component={FeaturePolicyDetail} />
    </Router>
  )
}

export default App
