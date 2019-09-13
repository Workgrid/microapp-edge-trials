import React, { useState, useEffect } from 'react'
import { decode } from 'jsonwebtoken'

export default ({ microapp }) => {
  const [tests, setTests] = useState([{ name: 'Token', result: false }])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => testToken(), [microapp])

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
    if (!microapp) return

    updateTest('Token', { result: false })
    // Arbitrarily add a "loading time" other wise you are kind of "did it work?"
    setTimeout(async () => {
      const token = await microapp.getToken()
      // This would be done on a server side, notice how I'm not verifying the token
      const decodedToken = decode(token)
      // TODO alter this verification when this app is upgraded to the more secure token
      if (decodedToken.aud === process.env.REACT_APP_AUD) {
        updateTest('Token', { result: true })
      } else {
        console.warn(`Invalid token: ${decodedToken.aud} !== ${process.env.REACT_APP_AUD}`)
      }
    }, 1000)
  }

  return (
    <>
      <strong>Tests:</strong>
      {tests.map(test => (
        <div className="checklist" key={test.name}>
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
    </>
  )
}
