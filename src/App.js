import React, { useEffect } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Summary from './pages/Summary'
import IFrameDetail from './pages/IFrameDetail'
// import FeaturePolicyDetail from './pages/FeaturePolicyDetail'
import TestDetail from './pages/TestDetail'

const App = () => {
  useEffect(() => {
    localStorage.setItem('debug', '*')
  }, [])

  return (
    <Router basename={window.location.pathname}>
      <Route path="/" exact component={Summary} />
      <Route path="/tests" component={TestDetail} />
      <Route path="/iframe" component={IFrameDetail} />
      {/* <Route path="/featurepolicy" component={FeaturePolicyDetail} /> */}
    </Router>
  )
}

export default App
