import React from 'react'

export default () => {
  return (
    <>
      <button className="btn secondary" onClick={() => window.location.reload(true)}>
        Refresh
      </button>
    </>
  )
}
