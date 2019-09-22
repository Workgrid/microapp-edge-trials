import React from 'react'

export default () => {
  return (
    <>
      <button className="secondary" onClick={() => window.location.reload(true)}>
        Refresh
      </button>
    </>
  )
}
