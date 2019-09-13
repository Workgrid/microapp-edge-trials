import React, { useRef, useEffect, useState } from 'react'
import MicroApp from '@workgrid/micro-app'
import { decode } from 'jsonwebtoken'
import './summary.css'

const Summary = () => {
  const [tests, setTests] = useState([{ name: 'Token', result: false }])

  const microapp = useRef(
    new MicroApp({
      id: 'edge-microapp',
      audience: 'edge-microapp'
    })
  )

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    console.log('Initialized')
    microapp.current.initialize()
    testToken()
    console.log('Done initializing')
  }, [])
  /* eslint-enable */

  const showDetail = detailPage => {
    // We have to use the hash router to show detail due to Github pages limitations
    console.log('Showing detail')
    microapp.current.showDetail({
      url: `${window.location.origin}${window.location.pathname}#/${detailPage}`,
      title: 'Edge Microapp'
    })
  }

  const updateTest = (name, update) => {
    setTests(prevTests => {
      return prevTests.map(test => {
        if (test.name === name) {
          return { ...test, ...update }
        } else {
          return test
        }
      })
    })
  }

  const testToken = () => {
    updateTest('Token', { result: false })
    // Arbitrarily add a "loading time" other wise you are kind of "did it work?"
    setTimeout(async () => {
      const token = await microapp.current.getToken()
      // This would be done on a server side, notice how I'm not verifying the token
      const decodedToken = decode(token)
      if (decodedToken.aud === process.env.REACT_APP_AUD) {
        updateTest('Token', { result: true })
      } else {
        console.warn(`Invalid token: ${decodedToken.aud} !== ${process.env.REACT_APP_AUD}`)
      }
    }, 1000)
  }

  return (
    <div>
      <h1>Edge Microapp</h1>
      <p>This is the "edgy" microapp.</p>
      <section className="section">
        <input type="text" placeholder="Input Test"></input>
        <strong>Tests:</strong>
        {tests.map(test => (
          <div className="checklist">
            {test.result ? (
              <span aria-label="pass" role="img" className="pass">
                ✅
              </span>
            ) : (
              <span aria-label="fail" role="img" className="pass">
                ❌
              </span>
            )}
            <div className="item">{test.name}</div>
            <div className="item">
              <button className="action-small" onClick={testToken}>
                Retry
              </button>
            </div>
          </div>
        ))}
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
