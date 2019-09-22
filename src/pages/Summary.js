import React, { useRef, useEffect } from 'react'
import Tests from '../components/Tests'
import MicroApp from '@workgrid/micro-app'
// import Debugger from '../components/Debugger'
import './summary.css'

const Summary = () => {
  const microapp = useRef(
    new MicroApp({
      id: 'edge-microapp-local',
      audience: 'edge-microapp'
    })
  )

  useEffect(() => {
    console.log('Initialize')
    microapp.current.initialize()
    console.log('Post initialize')
  }, [])

  const showDetail = detailPage => {
    // We have to use the hash router to show detail due to Github pages limitations
    console.log('Showing detail')
    microapp.current.showDetail({
      url: `${window.location.origin}${window.location.pathname}#/${detailPage}`,
      title: 'Edge Microapp'
    })
  }

  return (
    <div>
      <h1>Edge Microapp</h1>
      <p>This is the "edgy" microapp.</p>
      <section className="section">
        <input type="text" placeholder="Input Test"></input>
        <Tests microapp={microapp.current} />
      </section>
      <div className="action-block vertical">
        {/* <Debugger /> */}
        <button className="secondary" onClick={() => showDetail('iframe')}>
          Inner iFrame
        </button>
        <button className="primary" onClick={() => showDetail('tests')}>
          Detail Tests
        </button>
      </div>
    </div>
  )
}

export default Summary
