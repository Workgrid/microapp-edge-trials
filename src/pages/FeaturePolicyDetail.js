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

  const [isGeoAvailable] = useState('geolocation' in navigator)
  const [isMicAvailable] = useState(!!navigator.mediaDevices)
  const [locationData, setLocationData] = useState()
  const [isMicOn, setIsMicOn] = useState(false)

  useEffect(() => {
    microapp.current.initialize()
  }, [])

  const getLocationData = () => {
    if (isGeoAvailable) {
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

  const getMicrophone = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      setIsMicOn(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container">
      <h1>Feature Policy Detail</h1>
      <p>
        This detail attempts to get location data. You must include the featurePolicy in the catalog entry for this app.
      </p>
      <div className="example-block">
        <p>GeoLocation is available: {JSON.stringify(isGeoAvailable)}</p>
        <pre>{locationData}</pre>
        <p>Media is available: {JSON.stringify(isMicAvailable)}</p>
        <pre>{isMicOn ? 'recording' : 'not recording'}</pre>
      </div>
      <div className="action-block">
        <button className="secondary" onClick={getLocationData}>
          Get Location
        </button>
        <button className="secondary" onClick={getMicrophone}>
          Start Microphone
        </button>
      </div>
    </div>
  )
}

export default Detail
