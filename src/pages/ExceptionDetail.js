import React, { useRef, useEffect, useState } from 'react'
import MicroApp from '@workgrid/micro-app'
import './detail.css'

const ExceptionDetail = () => {
  const microapp = useRef(new MicroApp())
  const [status, setStatus] = useState('📦')

  useEffect(() => {
    microapp.current.initialize()
  }, [])

  const throwException = () => {
    setStatus('🤮')
    throw new Error('🤮')
  }

  return (
    <div className="container">
      <h1>Exception Detail</h1>
      <p>This tests throwing an unhandled exception in a MicroApp</p>
      <div className="example-block">
        <p>Status: {status}</p>
      </div>
      <div className="action-block">
        <button className="primary" type="button" onClick={throwException}>
          Throw Exception
        </button>
      </div>
    </div>
  )
}

export default ExceptionDetail
