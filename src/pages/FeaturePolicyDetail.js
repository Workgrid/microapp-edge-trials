import React, { useRef, useEffect, useState } from 'react'
import MicroApp from '@workgrid/micro-app'
import { ReactMic } from 'react-mic'
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
          setLocationData(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`)
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
      <h1>Feature Policy Detail</h1>
      <p>
        This detail attempts to get location data. You must include the featurePolicy in the catalog entry for this app.
      </p>
      <div className="example-block">
        <p>GeoLocation is available: {JSON.stringify(isGeoAvailable)}</p>
        <pre>{locationData}</pre>
        <p>Media is available: {JSON.stringify(isMicAvailable)}</p>
        <div className="mic-block">
          <ReactMic className="mic-visual" record={isMicOn} strokeColor="black" backgroundColor="#f9f9f9" />
          <div className="mic-icon" onClick={() => setIsMicOn(prev => !prev)}>
            <span role="img" aria-label="mic">
              🎙️
            </span>
          </div>
        </div>
      </div>
      <div className="action-block">
        <button className="secondary" onClick={getLocationData}>
          Get Location
        </button>
      </div>
    </div>
  )
}

export default Detail
