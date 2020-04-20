import React, { useRef, useEffect } from 'react'
import MicroApp from '@workgrid/micro-app'
import Debugger from '../components/Debugger'
import './summary.css'

import { version } from '../../package.json'
import Tests from '../components/Tests'

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
    <>
      <h1>Edge MicroUI</h1>
      <p>This is the "edgy" microapp v{version}</p>
      <section className="section">
        <form>
          <Tests style={{ marginBottom: '1rem' }} panel="summary" microapp={microapp.current} />
          <label htmlFor="test-input">Test Input:</label>
          <input id="test-input" type="text" style={{ marginTop: '.4rem' }} className="form-control" placeholder="Input Test" />
        </form>
      </section>
      <div className="action-block vertical">
        <Debugger />
        <button className="btn primary" onClick={() => showDetail('featurepolicy')}>
          Feature Policy
        </button>
      </div>
    </>
  )
}

export default Summary
