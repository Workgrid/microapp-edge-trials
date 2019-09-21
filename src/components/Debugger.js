import React, { useEffect, useState } from 'react'

export default () => {
  const [debuggerEnabled, setDebuggerEnabled] = useState(localStorage.getItem('debug') === 'courier:*')

  useEffect(() => {
    localStorage.setItem('debug', debuggerEnabled ? 'courier:*' : 'nothing')
  }, [debuggerEnabled])

  return (
    <>
      <button className="secondary" onClick={() => setDebuggerEnabled(!debuggerEnabled)}>
        {debuggerEnabled ? 'Disable' : 'Enable'} Debug
      </button>
      <button className="secondary" onClick={() => window.location.reload(true)}>
        Refresh
      </button>
    </>
  )
}
