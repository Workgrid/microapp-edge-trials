import React, { useRef, useEffect, useState } from 'react'
import MicroApp from '@workgrid/micro-app'

const Summary = () => {
  const [status, setStatus] = useState('Constructed')

  const microapp = useRef(
    new MicroApp({
      id: 'edge-microapp',
      audience: 'edge-microapp'
    })
  )

  useEffect(() => {
    microapp.current.initialize()
    setStatus('Initialized')
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
      <p>{status}</p>
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
