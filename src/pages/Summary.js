import React, { useRef, useEffect } from 'react'
import MicroApp from '@workgrid/micro-app'
import Debugger from '../components/Debugger'
import './summary.css'

import { version } from '../../package.json'

const Summary = () => {
  const microapp = useRef(
    new MicroApp({
      id: 'edge-microapp-local',
      audience: 'edge-microapp'
    })
  )

  useEffect(() => {
    microapp.current.initialize()
  }, [])

  const showDetail = detailPage => {
    // We have to use the hash router to show detail due to Github pages limitations
    microapp.current.showDetail({
      url: `${window.location.origin}${window.location.pathname}#/${detailPage}`,
      title: 'Edge Microapp'
    })
  }

  return (
    <div>
      <h1>Edge Microapp</h1>
      <p>This is the "edgy" microapp v{version}</p>
      <section className="section">
        <input type="text" placeholder="Input Test"></input>
      </section>
      <div className="action-block vertical">
        <Debugger />
        <button className="primary" onClick={() => showDetail('featurepolicy')}>
          Feature Policy
        </button>
      </div>
    </div>
  )
}

export default Summary
