import React, { useRef, useEffect } from 'react'
import MicroApp from '@workgrid/micro-app'
import './detail.css'

const Detail = () => {
  const microapp = useRef(
    new MicroApp({
      id: 'example-microapp',
      audience: 'example-microapp'
    })
  )

  useEffect(() => {
    microapp.current.initialize()
  }, [])

  const hideDetail = () => {
    microapp.current.hideDetail()
  }

  const requestToken = async () => {
    await microapp.current.getToken()
  }

  return (
    <div className="container">
      <h1>Workgrid Microapp</h1>
      <p>
        This is the detail panel of a microapp. Remember the summary and detail are independent, think of them as two
        individual tabs in your browser.
      </p>
      <div className="example-block">
        <label htmlFor="example">Example Input:</label>
        <input type="text" placeholder="Example input" name="example" />
      </div>
      <div className="action-block">
        <button className="secondary" onClick={hideDetail}>
          Hide Detail
        </button>
        <button className="primary" onClick={requestToken}>
          Request Token
        </button>
      </div>
    </div>
  )
}

export default Detail
