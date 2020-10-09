import React, { useRef, useEffect } from 'react'
import Tests from '../components/Tests'
import MicroApp from '@workgrid/micro-app'
import './summary.css'
import { version } from '../../package.json'

const searchParams = new URLSearchParams(window.location.search)
const shouldBeHeightZero = searchParams.get('heightZero')

const Summary = () => {
  const microapp = useRef(new MicroApp())

  useEffect(() => {
    if (window.parent.location !== window.location) {
      // If we are in an iframe, do the microapp stuff
      // This is a very basic way to do this since we don't need auth or communication to test this app
      microapp.current.initialize()
    }
  }, [])

  const switchTheme = () => {
    // Super POC, don't look at this
    const styleTag = document.querySelector('#customer-styles')
    if (styleTag.href.match(/base/)) {
      styleTag.href = styleTag.href.replace(/base/, 'berkley')
    } else {
      styleTag.href = styleTag.href.replace(/berkley/, 'base')
    }
  }

  const showDetail = (detailPage) => {
    // We have to use the hash router to show detail due to Github pages limitations
    microapp.current.showDetail({
      url: `${window.location.origin}${window.location.pathname}#/${detailPage}`,
      title: 'Edge Trial Microapp Detail',
    })
  }

  if (shouldBeHeightZero) {
    return null
  }

  return (
    <article className="summary">
      <header>
        <img alt="Edge Trials Logo" src="https://cdn.dev.workgrid.com/connectors/lyssa_mock/logos/fire_alarm-512.png" />
        <h1>
          Edge Trials{' '}
          <span role="img" aria-label="A knife">
            🔪
          </span>
        </h1>
      </header>
      <main>
        <p>This is the Edge Trials. v{version}</p>

        <section className="section">
          <Tests microapp={microapp.current} panel="summary" />
          <label htmlFor="test-input">Test Input</label>
          <input className="form-control" type="text" placeholder="Input Test" name="test-input" />
        </section>

        <div className="action-block vertical">
          <button className="btn secondary" onClick={switchTheme}>
            Switch Theme
          </button>
          <button className="btn secondary" onClick={() => showDetail('iframe')}>
            iFrame Tests
          </button>
          <button className="btn primary" onClick={() => showDetail('exception')}>
            Exception Tests
          </button>
        </div>
      </main>
    </article>
  )
}

export default Summary
