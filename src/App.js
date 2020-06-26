import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Summary from './pages/Summary'
import IFrameDetail from './pages/IFrameDetail'
import TestDetail from './pages/TestDetail'
import FeaturePolicyDetail from './pages/FeaturePolicyDetail'
import ExceptionDetail from './pages/ExceptionDetail'

const App = () => {
  return (
    <Router basename={window.location.pathname}>
      <Route path="/" exact component={Summary} />
      <Route path="/tests" component={TestDetail} />
      <Route path="/iframe" component={IFrameDetail} />
      <Route path="/featurepolicy" component={FeaturePolicyDetail} />
      <Route path="/exception" component={ExceptionDetail} />
    </Router>
  )
}

export default App
