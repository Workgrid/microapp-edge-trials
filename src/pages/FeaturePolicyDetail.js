import React, { useRef, useEffect, useState } from 'react'
import MicroApp from '@workgrid/micro-app'
// import { ReactMic } from 'react-mic'
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
  const [locationData, setLocationData] = useState('Get location data >>')
  const [isMicOn, setIsMicOn] = useState(false)

  useEffect(() => {
    microapp.current.initialize()
  }, [])

  const getLocationData = () => {
    if (isGeoAvailable) {
      setLocationData('Getting location data')
      try {
        navigator.geolocation.getCurrentPosition(position => {
          setLocationData(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`)
        })
      } catch (err) {
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
        <div className="feature-block">
          <pre>{locationData}</pre>
          <div tabIndex="0" className="feature-icon" onClick={getLocationData}>
            <span role="img" aria-label="position">
              🧭
            </span>
          </div>
        </div>
        <p>Media is available: {JSON.stringify(isMicAvailable)}</p>
        <div className="feature-block">
          {/* <ReactMic className="mic-visual" record={isMicOn} strokeColor="black" backgroundColor="#f9f9f9" /> */}
          <div tabIndex="1" className="feature-icon" onClick={() => setIsMicOn(prev => !prev)}>
            <span role="img" aria-label="mic">
              🎙️
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
