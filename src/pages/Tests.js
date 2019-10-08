import React, { useRef, useEffect, useState } from 'react'
import MicroApp from '@workgrid/micro-app'
import './detail.css'
import Tests from '../components/Tests'

const Detail = () => {
  const microapp = useRef(
    new MicroApp({
      id: 'edge-microapp',
      audience: 'edge-microapp'
    })
  )

  return (
    <div className="container">
      <h1>Tests in Detail</h1>
      <div className="example-block">
        <Tests microapp={microapp} panel={'detail'} />
      </div>
    </div>
  )
}

export default Detail
