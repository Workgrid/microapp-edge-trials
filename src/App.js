import React, { useEffect } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Summary from './pages/Summary'
import IFrameDetail from './pages/IFrameDetail'
import GeolocationDetail from './pages/GeolocationDetail'

const App = () => {
  console.log('Loading app')

  useEffect(() => {
    console.log('useEffect in app')
  }, [])

  return (
    <Router basename={window.location.pathname}>
      <Route path="/" exact component={Summary} />
      <Route path="/iframe" component={IFrameDetail} />
      <Route path="/geolocation" component={GeolocationDetail} />
    </Router>
  )
}

export default App
