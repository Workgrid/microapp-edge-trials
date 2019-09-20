import React, { useEffect, useState } from 'react'

export default () => {
  const [debuggerEnabled, setDebuggerEnabled] = useState(localStorage.getItem('debug') === '*')

  useEffect(() => {
    localStorage.setItem('debug', debuggerEnabled ? '*' : 'nothing')
  }, [debuggerEnabled])

  return (
    <button className="primary" onClick={() => setDebuggerEnabled(!debuggerEnabled)}>
      {debuggerEnabled ? 'Disable' : 'Enable'} Debug
    </button>
  )
}
