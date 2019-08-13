import React, { useRef, useEffect, useState } from 'react'
import MicroApp from '@workgrid/micro-app'
import './detail.css'

const Detail = () => {
  const microapp = useRef(
    new MicroApp({
      id: 'edge-microapp',
      audience: 'edge-microapp'
    })
  )

  const [isAvailable] = useState('geolocation' in navigator)
  const [locationData, setLocationData] = useState()

  useEffect(() => {
    microapp.current.initialize()
  }, [])

  const getLocationData = () => {
    if (isAvailable) {
      console.log('Getting location data')
      try {
        navigator.geolocation.getCurrentPosition(position => {
          console.log('Got location data ', position)
          setLocationData(JSON.stringify(position, null, 2))
        })
      } catch (err) {
        console.log(err)
        setLocationData('Error fetching location data')
      }
    } else {
      setLocationData('Geolocation is not available')
    }
  }

  return (
    <div className="container">
      <h1>Geolocation Detail</h1>
      <p>
        This detail attempts to get location data. You must include the featurePolicy in the catalog entry for this app.
      </p>
      <div className="example-block">
        <p>GeoLocation is available: {JSON.stringify(isAvailable)}</p>
        <pre>{locationData}</pre>
      </div>
      <div className="action-block">
        <button className="primary" onClick={getLocationData}>
          Get Location
        </button>
      </div>
    </div>
  )
}

export default Detail
