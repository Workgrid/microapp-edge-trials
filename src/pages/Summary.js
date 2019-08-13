import React, { useRef, useEffect } from 'react'
import MicroApp from '@workgrid/micro-app'

const Summary = () => {
  console.log('Loading summary ', MicroApp)

  const microapp = useRef(
    new MicroApp({
      id: 'edge-microapp',
      audience: 'edge-microapp'
    })
  )

  useEffect(() => {
    console.log('Initializing ', microapp.current)
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
      <p>This is the "edgy" microapp.</p>
      <div className="action-block vertical">
        <button className="secondary" onClick={() => showDetail('iframe')}>
          Inner iFrame
        </button>
        <button className="primary" onClick={() => showDetail('geolocation')}>
          Geolocation
        </button>
      </div>
    </div>
  )
}

export default Summary
