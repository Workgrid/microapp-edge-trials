import React, { useRef, useEffect } from 'react'
import MicroApp from '@workgrid/micro-app'

const Summary = () => {
  const microapp = useRef(
    new MicroApp({
      id: 'edge-microapp',
      audience: 'edge-microapp'
    })
  )

  useEffect(() => {
    console.log('Initialized')
    microapp.current.initialize()
    console.log('Done initializing')
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
      </section>
      <div className="action-block vertical">
        <button className="secondary" onClick={() => showDetail('iframe')}>
          Inner iFrame
        </button>
        <button className="primary" onClick={() => showDetail('featurepolicy')}>
          Feature Policy
        </button>
      </div>
    </div>
  )
}

export default Summary
